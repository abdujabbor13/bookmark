  const elsTabsItem = document.querySelectorAll('.tabs__item');
  const elsTabsPanel = document.querySelectorAll('.tabs__panel');
  const elsTabLink = document.querySelectorAll('.js-tab-link');

  function deactivateTabitems () {
    elsTabsItem.forEach(function (elTabsItem) {
      elTabsItem.classList.remove('tabs__item--active');
    });
  }

  function deactivateTebPanels () {
    elsTabsPanel.forEach(function (elTabsPanel) {
      elTabsPanel.classList.remove('tabs__panel--active');
    });
  }

  elsTabLink.forEach(function (elTabLink) {
    elTabLink.addEventListener('click', function (evt) {
      //prevent page move
      evt.preventDefault();


      //remove active class form tabs__item elements
      deactivateTabitems();


      //add active class to current tabs__item
      elTabLink.parentElement.classList.add('tabs__item--active');

      // remove active class form tabs__panel elements
      deactivateTebPanels();

      //shov active tab panel
      // const elTargetPanel = document.querySelector(`#${elTabLink.href.split('#')[1]}`);
      const elTargetPanel = document.querySelector(elTabLink.dataset.tabTarget);
      elTargetPanel.classList.add('tabs__panel--active');
    });
  });
