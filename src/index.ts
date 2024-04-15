import { IsNotEmpty, ValidateNested, IsString, validate } from 'class-validator'
import { plainToInstance, Type } from 'class-transformer';
import 'reflect-metadata';

class Hoge {
    @IsNotEmpty()
    @IsString()
    id: string;

    @Type(() => Fuga)
    @IsNotEmpty()
    @ValidateNested()
    a: Fuga;
}

class Fuga {
    @IsNotEmpty()
    @IsString()
    nyan: string;
}

const fuga = new Fuga();
fuga.nyan = "s"

const obj = {
    id: "sfds",
    a: {
        nyan: "ss"
    }
}
const a = plainToInstance(Hoge, obj);

console.log(a)

;(async () => {
    const ret = await validate(a)

    console.log(ret)
})();

