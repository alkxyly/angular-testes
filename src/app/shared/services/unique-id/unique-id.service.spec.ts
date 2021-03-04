import { UniqueIdService } from "./unique-id.service";

describe('UniqueService', () =>{
    it('#generateUniqueIdWithPrefix should generate id when called with prefix', () =>{
        const service = new UniqueIdService();
        const id = service.generetedUniqueIdWithPrefix('app');

        expect(id).toContain('app-');
    });
});