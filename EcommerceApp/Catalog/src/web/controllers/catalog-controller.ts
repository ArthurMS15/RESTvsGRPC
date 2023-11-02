import {CatalogController} from './types';


export const catalogController: CatalogController = {
  search: async (req, res) => {
    //const data = await getValidator(req);
    //const result = await getUseCase(data.params);
    res.json("hello world"); 
  },
}