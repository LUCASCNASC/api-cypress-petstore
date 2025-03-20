describe('PUT API Test for Petstore', () => {
    const url = 'https://petstore.swagger.io/v2/pet';
    const requestBody = {
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
    };
  
    const expectedResponseBody = {
      id: 9222968140497182000,
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
    };
  
    it('should return status code 200 and validate response', () => {
      cy.request({
        method: 'PUT',
        url: '/pet/updatePet',
        body: requestBody,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.deep.equal(expectedResponseBody);
      });
    });
  
    it('should return status code 405 for invalid method', () => {
      cy.request({
        method: 'POST',
        url: '/pet/updatePet',
        body: requestBody,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(405);
      });
    });
  });