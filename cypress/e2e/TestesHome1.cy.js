describe('Teste funcional do site NexDom', () => {
    
    //caso de Teste focado na validação das informações em "Soluçoes", e verificação se está funcional
    //Objetivo: Validar se os botões estão funcionais, validar o correto direcionamento e apresentação das informações
    it('Teste home "Soluções"', () => {
        //Acessa o site NexDom
        cy.visit("https://nexdom.tec.br/")
        cy.wait(2000)
        //Clica em "Saiba mais"
        cy.get('.elementor-element-bdbb258 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button > .elementor-button-content-wrapper > .elementor-button-text').click()
        cy.wait(1000)
        //verifica se foi direcionado para a parte de "Conheça nossa história"
        cy.get('.elementor-element-48e0094 > .elementor-widget-container > .elementor-heading-title').should('be.visible');
        //Scrolla até o elemento "Soluções"
        cy.get('.elementor-element-3b0535a > .elementor-widget-container > .elementor-heading-title').scrollIntoView();
        cy.wait(2000)
        //Clica em "Gestão de planos de saúde"
        cy.get('.elementor-element-eee13e6 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(1) > a > .elementor-icon-list-text').click()
        cy.wait(1000)
        //Verifica se foi direcionado para parte de "Gestão de Planos de Saúde"
        cy.get('.elementor-element-6d5a91e > .elementor-widget-container > .elementor-heading-title').should('be.visible');
        //clica para expandir todas as informações
        cy.get('#operacional-contas-mdicas-intercmbio > .eael-accordion-tab-title').click()
        cy.wait(1000)
        cy.get('#motor-de-regra-de-negcio > .eael-accordion-tab-title').click()
        cy.wait(1000)
        cy.get('#cadastro > .eael-accordion-tab-title').click()
        cy.wait(1000)
        cy.get('#pagamento > .eael-accordion-tab-title').click()
        cy.wait(1000)
        cy.get('#ans').click()
        cy.wait(1000)
        cy.get('#comisses > .eael-accordion-tab-title').click()
        cy.wait(1000)
        cy.get('#integraes > .eael-accordion-tab-title').click()
        cy.wait(1000)
        cy.get('#contabilizao > .eael-accordion-tab-title').click()
        cy.wait(1000)
        cy.get('#modelo-prestadora > .eael-accordion-tab-title').click()
        //Clica em "Autorização e Atendimento"
        cy.get(':nth-child(2) > a > .elementor-icon-list-text').click()
        cy.wait(1000)
        //Valida se foi direcionado para parte de "Autorização d Atendimento"
        cy.get('.elementor-element-6d5a91e > .elementor-widget-container > .elementor-heading-title').should('be.visible');
        //clica em "ATD Captura"
        cy.get('#e-n-tab-title-737046921 > .e-n-tab-title-text').click()
        cy.wait(1000)
        //Clica em "Motor de regra de negocio"
        cy.get('#e-n-tab-title-737046922 > .e-n-tab-title-text').click()
        cy.wait(1000)
        //Clica em "Autorizador on-line"
        cy.get('#e-n-tab-title-737046923 > .e-n-tab-title-text').click()
        cy.wait(1000)
        //Clica em auditoria Web
        cy.get('#e-n-tab-title-737046924 > .e-n-tab-title-text').click()
        cy.wait(1000)
        //Clica em "Ressarcimento ao SUS" na parte de Soluções
        cy.get('.elementor-element-eee13e6 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(3) > a > .elementor-icon-list-text').click()
        cy.wait(1000)
        //Verifica se foi direcionado ao "Ressarcimento ao SUS"
        cy.get('.elementor-element-6d5a91e > .elementor-widget-container > .elementor-heading-title').should('be.visible');
        //Clica para expandir a informação "Redução de Erros e Retrabalhos"
        cy.get('#reduo-de-erros-e-retrabalho > .eael-accordion-tab-title').click()
        //Clica para expandir a informação em "Eficiência Operacional"
        cy.get('#eficincia-operacional').should('be.visible').click();
        //cy.get('#eficincia-operacional').click()
        cy.wait(1000)
        //Clica para expandir a informação em "Transparência e Controle"
        cy.get('#transparncia-e-controle > .eael-accordion-tab-title').click()
        cy.wait(1000)
        //Clica para expandir a informação em "Conformidade com normas"
        cy.get('#conformidade-com-normas > .eael-accordion-tab-title').click()
        cy.wait(1000)
        //Clica no link de "Portal da empresa e beneficiário"
        cy.get(':nth-child(4) > a > .elementor-icon-list-text').click()
        cy.wait(1000)
        //Valida o direcionamento para "Portal da Empresa e beneficiário"
        cy.get('.elementor-element-956a1b0 > .elementor-widget-container > .elementor-heading-title').should('be.visible');
        //Clica em "Portal Empresa"
        cy.get('#e-n-tab-title-602286361 > .e-n-tab-title-text').click()
        cy.wait(1000)
        //clica em "Portal Beneficiário"
        cy.get('#e-n-tab-title-602286362').click()
        cy.wait(1000)
        //Clica em "Portal Operadora"
        cy.get('#e-n-tab-title-602286363 > .e-n-tab-title-text').click()
        cy.wait(1000)
        //clica em Portal de Auditoria (AMC)
        cy.get('#e-n-tab-title-602286364 > .e-n-tab-title-text').click()
        cy.wait(1000)
        //Clica em "Gestão de relacionamento e ouvidoria"
        cy.get(':nth-child(5) > a > .elementor-icon-list-text').click()
        cy.wait(1000)
        //Valida o direcionamento para "Gestão de relacionamento e ouvidoria "
        cy.get('.elementor-element-40af698 > .elementor-widget-container > .elementor-heading-title').should('be.visible');
        cy.wait(1000)
        //Valida funcionamento da seta em "Gestão de relacionamento e ouvidoria"
        cy.get('.elementor-element-f8c7dac').click()
        //Scrolla até o elemento "Principais recursos"
        cy.get('.elementor-element-1d006ab > .elementor-widget-container > .elementor-heading-title').scrollIntoView();
        //Clica para expandir "Arquitetura robusta"
        cy.get('#arquitetura-robusta > .eael-accordion-tab-title').click()
         cy.wait(1000)
         //Clica para expandir "Interação seamless"
         cy.get('#integrao-seamless > .eael-accordion-tab-title').click()
         //Clica para expandir "Base de dados centralizada"
         cy.get('#base-de-dados-centralizada > .eael-accordion-tab-title').click()
         cy.wait(1000)
         //Clica para expandir a "Segurança avançada"
         cy.get('#segurana-avanada').click()
         cy.wait(1000)
         //Clica para expandir a "Tecnologia ommnicanal"
         cy.get('#tecnologia-omnicanal').click()
         cy.wait(1000)
         //Clica em "Business inteligence"
         cy.get(':nth-child(6) > a > .elementor-icon-list-text').click()
         cy.wait(1000)
         //Clica para expandir "Comece a analisar dados de forma eficiente desde o primeiro dia"
         cy.get('#comece-a-analisar-dados-de-forma-eficiente-desde-o-primeiro-dia-').click()
        cy.wait(1000)
        //Clica para expandir "Visualizações de dados sem custo adicionais de licenciamento"
        cy.get('#visualizaes-de-dados-sem-custos-adicionais-de-licenciamento > .eael-accordion-tab-title').click()
        cy.wait(1000)
        //Clica para expandir "Análise prontas desde a implantação:insights imediatos para a gestão"
        cy.get('#anlises-prontas-desde-a-implantao-insights-imediatos-para-a-gesto > .eael-accordion-tab-title').click()
        //Clica para expandir "Suporte completo e treinamento especializado para sua equipe"
        cy.get('#suporte-completo-e-treinamento-especializado-para-sua-equipe > .eael-accordion-tab-title').click()
        cy.wait(1000)
        //Clica para expandir "Autonomia para criar visões personalizadas e compatibilidade com ferramentas de visualização"
        cy.get('#autonomia-para-criar-vises-personalizadas-e-compatibilidade-com-ferramentas-de-visualizao > .eael-accordion-tab-title').click()
        //clica para expandir "Integração de fontes de dados terceiras: centralize e maximize o valor dos seus dados"
        cy.get('#integrao-de-fontes-de-dados-terceiras-centralize-e-maximize-o-valor-dos-seus-dados- > .eael-accordion-tab-title').click()
        //clica para assistir o video
        cy.get('#widget2').click ()
        cy.wait(2000)

        cy.visit("https://nexdom.tec.br/")


    });
});