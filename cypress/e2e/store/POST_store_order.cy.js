describe('API Tests for PetStore', () => {

    const requestBody = {
      id: 0,
      petId: 0,
      quantity: 0,
      shipDate: '2025-03-29T16:32:42.445Z',
      status: 'placed',
      complete: true
    };
    
    const expectedResponseBody = {
      id: 0,
      petId: 0,
      quantity: 0,
      shipDate: '2025-03-29T16:32:43.866Z',
      status: 'placed',
      complete: true
    };
  
    it('should return 200 for a valid request', () => {
      cy.request({
        method: 'POST',
        url: '/store/placeOrder',
        body: requestBody
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.deep.equal(expectedResponseBody);
      });
    });
  
    it('should return 400 for an invalid request', () => {
      const invalidRequestBody = {
        ...requestBody,
        petId: 'invalid'
      };
  
      cy.request({
        method: 'POST',
        url: '/store/placeOrder',
        body: invalidRequestBody,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(400);
      });
    });
  
  });