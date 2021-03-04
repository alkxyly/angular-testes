import { UniqueIdService } from "./unique-id.service";

describe(UniqueIdService.name, () =>{
    it(`#${UniqueIdService.prototype.generetedUniqueIdWithPrefix.name} should generate id when called with prefix`, () =>{
        const service = new UniqueIdService();
        const id = service.generetedUniqueIdWithPrefix('app');

        expect(id).toContain('app-');
    });
});