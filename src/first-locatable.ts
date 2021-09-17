//var locatePath = require("locate-path");

//const fs = require('fs');
//export const firstLocatable: FirstLocatable = async (pathList:string[])=>pathList.find((path)=>fs.existsSync(path));

const fs = require('fs').promises;

type FirstLocatable = (pathList:string[]) => Promise<string|undefined>

const asyncSome = async (arr:string[], predicate:(element:string)=>Promise<boolean>) => {
	for(let e of arr) {
		if (await predicate(e)) return e;
	}
	return undefined;
};

export const firstLocatable: FirstLocatable = async (pathList:string[])=>
    await asyncSome(pathList, async (path) => {
        try{
            await fs.stat(path)
            return true
        }catch(err){
            //@ts-ignore
            if(err.code = 'ENOENT'){
                return false
            }
            throw err
        }
    });
    