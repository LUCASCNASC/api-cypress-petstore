describe('API Test', () => {
    it('should return status 200 and validate response', () => {
      cy.request({
        method: 'GET',
        url: '/store/getInventory',
        qs: { status: 'available' },
        failOnStatusCode: false
      })
        .then((response) => {
          // Assert status code
          expect(response.status).to.eq(200);
  
          // Assert response body
          expect(response.body).to.have.property('additionalProp1', 0);
          expect(response.body).to.have.property('additionalProp2', 0);
          expect(response.body).to.have.property('additionalProp3', 0);
        });
    });
  });