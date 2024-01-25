iModal = {
    constants: {
        container: "presentation",
        headerClass: "css-19hcsz9-Typography",
        descriptionClass: "css-1ql0wvf-Typography",
        errorRoute: "/student/error/modal",
        dashRoute: "/student/dashboard/home",
        buttonId: "continue-button-button",
        dashId : "StudentDashboard-g38",
        cardClass : "e1vvjwpf1-card-body",

        get dashHook() {
            return Object.values(document.getElementById(this.dashId))[1].children[0]._owner.stateNode;
        },
    },
    cachedGoto: null, // Save the goto function
    closeModal: function () {
        iModal.goto(iModal.constants.dashRoute);
    },
    goto: function (route) {
        return this.cachedGoto(route);
    },
    showModal: function (config) {
        if (iModal.cachedGoto === null) {
            // Save the original goto function before it's unavailable
            iModal.cachedGoto = iModal.constants.dashHook.props.navigationToPageByRelativeUrl;
        }

        function handleMutation(mutationsList, observer) {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach(node => {
                        if (node.role === iModal.constants.container && document.getElementById(iModal.constants.dashId) === null) {
                            let card = document.getElementsByClassName(iModal.constants.cardClass)[0];
                            let header = document.getElementsByClassName(iModal.constants.headerClass)[0];
                            let desc = document.getElementsByClassName(iModal.constants.descriptionClass)[0];
                            let button = document.getElementById(iModal.constants.buttonId);

                            if (config.width) {
                                card.style.width = config.width
                            }
                            
                            // Check if useInnerHTML is true, then use innerHTML, else use textContent
                            header[config.useInnerHTML ? 'innerHTML' : 'textContent'] = config.title;
                            desc[config.useInnerHTML ? 'innerHTML' : 'textContent'] = config.description;

                            if (config.callback) {
                                button.onclick = config.callback;
                            } else {
                                button.onclick = iModal.closeModal
                            }
                        }
                    });
                }
            }
        }

        const observer = new MutationObserver(handleMutation);
        observer.observe(document, { childList: true, subtree: true });
        iModal.goto(iModal.constants.errorRoute);
    },
};