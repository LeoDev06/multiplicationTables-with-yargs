import { CreateTable } from "../domain/useCases/createTable.useCase";
import { SaveFile } from "../domain/useCases/saveFile.useCase";

interface RunOptions {
  base           : number,
  limit          : number,
  showTable      : boolean,
  fileName       : string,
  fileDestination: string
}

export class ServerApp{

  static run( {base, limit, showTable, fileName, fileDestination}: RunOptions){
    console.log('Server runing...');

    const table = new CreateTable().execute({base, limit});
    const wasCreated = new SaveFile().execute({fileContent: table, fileName, fileDestination})
    
    if(showTable)
    console.log(table);

    (wasCreated)
      ? console.log('File created')
      : console.log('File not created');

  }
}
