const enum AnimalEnum {
    Dog,
    Cat,
    Bird
}
const enum OtherEnum {
    DXg,
    CXt,
    BXrd
}
class FileHandle { }
type FilePointer = Deno.PointerObject & { brand: FileHandle }
const genericPointer = {} as Deno.PointerObject;

const animalType = "u8" as Deno.NativeU8Enum<AnimalEnum>;
const filePointer = "pointer" as Deno.NativeTypedPointer<FilePointer>;

const lib = Deno.dlopen("animal_file_lib.so", {
    makeAnimalSound: { parameters: [animalType], result: "pointer" },
    openAnimalFile: { parameters: ["pointer"], result: filePointer },
    writeToFile: { parameters: [filePointer], result: "i32" },
});


const animalsoundpointer = lib.symbols.makeAnimalSound(AnimalEnum.Dog);


lib.symbols.makeAnimalSound(OtherEnum.DXg); //intended type error

const file = lib.symbols.openAnimalFile(genericPointer);
lib.symbols.writeToFile(file);

lib.symbols.writeToFile(animalsoundpointer); //intended type error

lib.symbols.writeToFile(genericPointer); //intended type error

lib.symbols.writeToFile(file);