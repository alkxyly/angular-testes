import { UniqueIdService } from "./unique-id.service";



describe(UniqueIdService.name, () =>{
    
    let service = null;
    
    beforeEach(() => {
        service  = new UniqueIdService();
    });

    it(`#${UniqueIdService.prototype.generetedUniqueIdWithPrefix.name}
         should generate id when called with prefix`, () =>{
    
        const id = service.generetedUniqueIdWithPrefix('app');

        expect(id.startsWith('app-')).toBeTrue();
    });

    it(`#${UniqueIdService.prototype.generetedUniqueIdWithPrefix.name}  
        should not generate duplicate id`, ()=>{
        
        const ids = new Set();

        for(let i = 0; i <  50; i++){
            ids.add(service.generetedUniqueIdWithPrefix('app'));
        }

        expect(ids.size).toBe(50);

    });

    it(`#${UniqueIdService.prototype.generetedUniqueIdWithPrefix.name}
         should return the number id  generated`, ()=>{
       
        service.generetedUniqueIdWithPrefix('app');
        service.generetedUniqueIdWithPrefix('app');

        expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);

    });

    it(`#${UniqueIdService.prototype.generetedUniqueIdWithPrefix.name}
         should throw when called with empty`, () => {
            const emptyValues = [null, undefined, '', '0', '1'];
            emptyValues.forEach(emptyValues => {
                expect(() => service.generetedUniqueIdWithPrefix(emptyValues)).toThrow();
            })
    });
    
});