  const modifiers = {
    tabItemActive: 'tabs__item--active',
    accardionItemOpen: 'accordion__item--open',
    tabpanelsIteActive: 'tabpanels__item--active'
  }

  const elsTabsItem = document.querySelectorAll('.tabs__item');
  const elsTabsPanel = document.querySelectorAll('.tabpanels__item');
  const elsTabLink = document.querySelectorAll('.js-tab-link');

  const elsAccordionItem = document.querySelectorAll('.accordion__item');
  const elsAccordionItemToggler = document.querySelectorAll('.accordion__item-toggler');

  function deactivateTabitems () {
    elsTabsItem.forEach(function (elTabsItem) {
      elTabsItem.classList.remove(modifiers.tabItemActive);
    });
  }

  function deactivateTebPanels () {
    elsTabsPanel.forEach(function (elTabsPanel) {
      elTabsPanel.classList.remove(modifiers.tabpanelsIteActive);
    });
  }

  function closeAccordionItems () {
    elsAccordionItem.forEach(function (elAccordionItem) {
      elAccordionItem.classList.remove(modifiers.accardionItemOpen);
    });
  }

  elsTabLink.forEach(function (elTabLink) {
    elTabLink.addEventListener('click', function (evt) {
      //prevent page move
      evt.preventDefault();


      //remove active class form tabs__item elements
      deactivateTabitems();


      //add active class to current tabs__item
      elTabLink.parentElement.classList.add(modifiers.tabItemActive);

      // remove active class form tabs__panel elements
      deactivateTebPanels();

      //shov active tab panel
      // const elTargetPanel = document.querySelector(`#${elTabLink.href.split('#')[1]}`);
      const elTargetPanel = document.querySelector(elTabLink.dataset.tabTarget);
      elTargetPanel.classList.add(modifiers.tabpanelsIteActive);
    });
  });


  elsAccordionItemToggler.forEach(function (elAccordionItemToggler) {
    elAccordionItemToggler.addEventListener('click', function () {
      closeAccordionItems();

      elAccordionItemToggler.closest('.accordion__item').classList.add(modifiers.accardionItemOpen);
    });
  });