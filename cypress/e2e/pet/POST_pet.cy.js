describe('API Test - POST /pet', () => {

  it('Status 200 - should add a new pet and validate response body', () => {
    const requestBody = {
      "id": 0,
      "category": {
        "id": 0,
        "name": "string"
      },
      "name": "doggie",
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "status": "available"
    };

    const expectedResponseBody = {
      "id": 9222968140497181000,
      "category": {
        "id": 0,
        "name": "string"
      },
      "name": "doggie",
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "status": "available"
    };

    cy.request({
      method: 'POST',
      url: '/pet',
      body: requestBody,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id');
      expect(response.body.category).to.deep.equal(expectedResponseBody.category);
      expect(response.body.name).to.eq(expectedResponseBody.name);
      expect(response.body.photoUrls).to.deep.equal(expectedResponseBody.photoUrls);
      expect(response.body.tags).to.deep.equal(expectedResponseBody.tags);
      expect(response.body.status).to.eq(expectedResponseBody.status);
    });
  });

  it('should return 405 for invalid input', () => {
    const invalidRequestBody = {
      "invalidField": "invalidValue"
    };

    cy.request({
      method: 'POST',
      url: '/pet',
      failOnStatusCode: false,
      body: invalidRequestBody,
      headers: {
        'Content-Type': 'application/json'
      },
      failOnStatusCode: false // Prevent Cypress from failing the test on non-2xx status codes
    }).then((response) => {
      expect(response.status).to.eq(405);
      expect(response.body).to.include('Invalid input');
    });
  });
});