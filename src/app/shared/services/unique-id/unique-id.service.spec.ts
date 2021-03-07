import { UniqueIdService } from "./unique-id.service";

describe(UniqueIdService.name, () =>{
    it(`#${UniqueIdService.prototype.generetedUniqueIdWithPrefix.name} should generate id when called with prefix`, () =>{
        const service = new UniqueIdService();
        const id = service.generetedUniqueIdWithPrefix('app');

        expect(id.startsWith('app-')).toBeTrue();
    });

    it(`#${UniqueIdService.prototype.generetedUniqueIdWithPrefix.name}  should not generate duplicate id`, ()=>{
        const service = new UniqueIdService();
        const ids = new Set();

        for(let i = 0; i <  50; i++){
            ids.add(service.generetedUniqueIdWithPrefix('app'));
        }

        expect(ids.size).toBe(50);

    });

    
});