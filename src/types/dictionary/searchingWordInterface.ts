export interface IPhonetics {
    text: string;
    audio: string;
}

export interface IMeanings {
    partOfSpeech: string;
    definitions: IDefinitions[];
}

export interface ILicense {
    name: string;
    url: string;
}

interface IDefinitions {
    definition: string;
    example: string;
}