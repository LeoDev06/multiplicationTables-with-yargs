import fs from 'fs';


export interface SaveFileUseCase {
  execute: (options: SaveFileUseCaseOptions) => boolean;
}

export interface SaveFileUseCaseOptions {
  fileContent     : string,
  fileDestination?: string,
  fileName?       : string
}

export class SaveFile implements SaveFileUseCase {

  constructor(){

  }

  execute({fileContent, fileDestination = `outputs`, fileName = `table` }: SaveFileUseCaseOptions): boolean{
    
    try {

      fs.mkdirSync(fileDestination, {recursive: true});
      fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
      return true;

    } catch (error) {
      
      console.error(error);
      return false;

    }
    
  }
}