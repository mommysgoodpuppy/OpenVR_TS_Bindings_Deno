add metadata decorators to structs

//defs

```
// Type definitions for our metadata
type FieldType = 'float' | 'int' | 'bool' | 'struct';

interface FieldOptions {
    type: FieldType;
    dimensions?: number[];
    size?: number;
    structType?: any;
}

interface StructOptions {
    align?: number;
}

// Symbol to store metadata
const structMetadataKey = Symbol("structMetadata");

// StructField decorator
export function StructField(options: FieldOptions) {
    return function(target: any, propertyKey: string | symbol) {
        if (!target.constructor[structMetadataKey]) {
            target.constructor[structMetadataKey] = {};
        }
        target.constructor[structMetadataKey][propertyKey] = options;
    };
}

// Struct decorator
export function Struct(options: StructOptions = {}) {
    return function<T extends { new (...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            static [structMetadataKey] = constructor[structMetadataKey] || {};
            static __structOptions = options;
        };
    };
}

// Utility function to get struct metadata
export function getStructMetadata(target: any): { [key: string]: FieldOptions } {
    return target[structMetadataKey] || {};
}
```

//example

```
@Struct({ align: 16 })
export class HmdMatrix34 {
    @StructField({ type: 'float', dimensions: [3, 4] })
    m: [[number, number, number, number], [number, number, number, number], [number, number, number, number]];

    constructor(matrix?: HmdMatrix34['m']) {
        this.m = matrix || [
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0]
        ];
    }

    toFloat32Array(): Float32Array {
        return new Float32Array(this.m.flat());
    }
}
```

//util

```
function createBuffer(obj: any): ArrayBuffer {
    const constructor = obj.constructor;
    const metadata = getStructMetadata(constructor);
    const options = constructor.__structOptions || {};

    // Use metadata to calculate buffer size and create buffer
    // ... implementation details ...
}

function createPointer<T>(obj: T): Deno.PointerObject<T> {
    const buffer = createBuffer(obj);
    return Deno.UnsafePointer.of(buffer) as Deno.PointerObject<T>;
}
```
