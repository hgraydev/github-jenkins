describe('Open IW Site', function() {
	it('Visiti IW Site', function(){
		cy.visit('https://www.interware.com.mx/contactanos')
	})

	it('Fill Form', function() {
		cy.get('input[name=firstname]').type('hgraydev')
		cy.get('input[name=lastname]').type('555-555-5555')
		cy.get('input[name=email]').type('noseo@email.com')
		cy.get('input[name=company]').type('CompanyFake')
		cy.get('input[name=jobtitle]').type('Developer')
		cy.get('select[name=solucion_de_interes]').select('Chatbot')
		cy.get('input[name=state]').type('Ciudad de México')
		cy.get('[type="submit"]').click()
	})
})

