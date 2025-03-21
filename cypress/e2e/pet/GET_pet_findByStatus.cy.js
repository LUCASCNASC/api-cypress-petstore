describe('API Test Scenarios', () => {
    const endpoint = '/pet/findPetsByStatus';
  
    it('should validate status code 200 and response body', () => {
      cy.request({
        method: 'GET',
        url: '/pet/findPetsByStatus',
        qs: { status: 'available' },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.deep.equal([
          {
            id: 0,
            category: {
              id: 0,
              name: 'string'
            },
            name: 'doggie',
            photoUrls: ['string'],
            tags: [
              {
                id: 0,
                name: 'string'
              }
            ],
            status: 'available'
          }
        ]);
      });
    });
  
    it('should validate status code 400 for invalid request', () => {
      cy.request({
        method: 'GET',
        url: '/pet/findPetsByStatus',
        qs: { status: 'invalidStatus' },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(400);
      });
    });
  });