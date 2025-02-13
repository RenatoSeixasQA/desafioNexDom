describe('Teste funcional em Gestão de planos de saúde', () => {
    
    //Caso de teste focado no fluxo de "Gestão de planos de saúde"
    //Objetivo: Validar se o fuxo está funcional 
    it('Teste home2', () => {
        //Acessa o site NexDom
        cy.visit("https://nexdom.tec.br/")
        cy.wait(2000)
        //Clica no "+" em "Gestão de planos de saúde"
        cy.get('.elementor-element-a1c4f94 > .elementor-element > .elementor-widget-container > .elementor-icon-wrapper > .elementor-icon > svg > path').click()
        //clica para expandir "Operacional médicas e intercâmbio"
        cy.wait(1000)
        cy.get('#operacional-contas-mdicas-intercmbio').click()
        cy.wait(1000)
        //Clica para expandir "Motor de regra de negocio"
        cy.get('#motor-de-regra-de-negcio').click()
        cy.wait(1000)
        //clica para expandir "Cadastro"
        cy.get('#cadastro > .eael-accordion-tab-title').click()
        cy.wait(1000)
        //Clica para expandir "Pagamento"
        cy.get('#pagamento > .eael-accordion-tab-title').click()
        cy.wait(1000)
        //clica para expandir "Faturamento"
        cy.get('#faturamento > .eael-accordion-tab-title').click()
        cy.wait(1000)
        //clica para expandir "ANS"
        cy.get('#ans').click()
        cy.wait(1000)
        //clica para expandir "Comissões"
        cy.get('#comisses > .eael-accordion-tab-title').click()
        cy.wait(1000)
        //Clica para expandir "Contabilização"
        cy.get('#contabilizao > .eael-accordion-tab-title').click()
        cy.wait(1000)
        //clica para expandir "Modelo prestadora"
        cy.get('#modelo-prestadora > .eael-accordion-tab-title').click()

        cy.visit("https://nexdom.tec.br/")



    });
});