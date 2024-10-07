'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-starter documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="contributing.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CONTRIBUTING
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AddressTypeModule.html" data-type="entity-link" >AddressTypeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AddressTypeModule-8967ac9e15bb489f5a24a953f11f6516"' : 'data-target="#xs-controllers-links-module-AddressTypeModule-8967ac9e15bb489f5a24a953f11f6516"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AddressTypeModule-8967ac9e15bb489f5a24a953f11f6516"' :
                                            'id="xs-controllers-links-module-AddressTypeModule-8967ac9e15bb489f5a24a953f11f6516"' }>
                                            <li class="link">
                                                <a href="controllers/AddressTypeController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddressTypeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AddressTypeModule-8967ac9e15bb489f5a24a953f11f6516"' : 'data-target="#xs-injectables-links-module-AddressTypeModule-8967ac9e15bb489f5a24a953f11f6516"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AddressTypeModule-8967ac9e15bb489f5a24a953f11f6516"' :
                                        'id="xs-injectables-links-module-AddressTypeModule-8967ac9e15bb489f5a24a953f11f6516"' }>
                                        <li class="link">
                                            <a href="injectables/AddressTypeService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddressTypeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ApiModule.html" data-type="entity-link" >ApiModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-a4dbcc74bf0d937f71643c7409602545"' : 'data-target="#xs-controllers-links-module-AppModule-a4dbcc74bf0d937f71643c7409602545"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-a4dbcc74bf0d937f71643c7409602545"' :
                                            'id="xs-controllers-links-module-AppModule-a4dbcc74bf0d937f71643c7409602545"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BankModule.html" data-type="entity-link" >BankModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-BankModule-7eb6d1714624535d8c1e72c4e816c492"' : 'data-target="#xs-controllers-links-module-BankModule-7eb6d1714624535d8c1e72c4e816c492"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BankModule-7eb6d1714624535d8c1e72c4e816c492"' :
                                            'id="xs-controllers-links-module-BankModule-7eb6d1714624535d8c1e72c4e816c492"' }>
                                            <li class="link">
                                                <a href="controllers/BankController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BankController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BankModule-7eb6d1714624535d8c1e72c4e816c492"' : 'data-target="#xs-injectables-links-module-BankModule-7eb6d1714624535d8c1e72c4e816c492"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BankModule-7eb6d1714624535d8c1e72c4e816c492"' :
                                        'id="xs-injectables-links-module-BankModule-7eb6d1714624535d8c1e72c4e816c492"' }>
                                        <li class="link">
                                            <a href="injectables/BankService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BankService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CityModule.html" data-type="entity-link" >CityModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CityModule-a8132b9cbbb63a081dedf64fd96103b5"' : 'data-target="#xs-controllers-links-module-CityModule-a8132b9cbbb63a081dedf64fd96103b5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CityModule-a8132b9cbbb63a081dedf64fd96103b5"' :
                                            'id="xs-controllers-links-module-CityModule-a8132b9cbbb63a081dedf64fd96103b5"' }>
                                            <li class="link">
                                                <a href="controllers/CityController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CityController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CityModule-a8132b9cbbb63a081dedf64fd96103b5"' : 'data-target="#xs-injectables-links-module-CityModule-a8132b9cbbb63a081dedf64fd96103b5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CityModule-a8132b9cbbb63a081dedf64fd96103b5"' :
                                        'id="xs-injectables-links-module-CityModule-a8132b9cbbb63a081dedf64fd96103b5"' }>
                                        <li class="link">
                                            <a href="injectables/CityService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CityService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactModule.html" data-type="entity-link" >ContactModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ContactModule-ffa242294edd49b0b993683de6cedb13"' : 'data-target="#xs-controllers-links-module-ContactModule-ffa242294edd49b0b993683de6cedb13"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ContactModule-ffa242294edd49b0b993683de6cedb13"' :
                                            'id="xs-controllers-links-module-ContactModule-ffa242294edd49b0b993683de6cedb13"' }>
                                            <li class="link">
                                                <a href="controllers/ContactController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ContactModule-ffa242294edd49b0b993683de6cedb13"' : 'data-target="#xs-injectables-links-module-ContactModule-ffa242294edd49b0b993683de6cedb13"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ContactModule-ffa242294edd49b0b993683de6cedb13"' :
                                        'id="xs-injectables-links-module-ContactModule-ffa242294edd49b0b993683de6cedb13"' }>
                                        <li class="link">
                                            <a href="injectables/ContactService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CountriesModule.html" data-type="entity-link" >CountriesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CountriesModule-a6dd3ae3da6deae25c846a150d2d91f5"' : 'data-target="#xs-controllers-links-module-CountriesModule-a6dd3ae3da6deae25c846a150d2d91f5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CountriesModule-a6dd3ae3da6deae25c846a150d2d91f5"' :
                                            'id="xs-controllers-links-module-CountriesModule-a6dd3ae3da6deae25c846a150d2d91f5"' }>
                                            <li class="link">
                                                <a href="controllers/CountriesController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CountriesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CountriesModule-a6dd3ae3da6deae25c846a150d2d91f5"' : 'data-target="#xs-injectables-links-module-CountriesModule-a6dd3ae3da6deae25c846a150d2d91f5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CountriesModule-a6dd3ae3da6deae25c846a150d2d91f5"' :
                                        'id="xs-injectables-links-module-CountriesModule-a6dd3ae3da6deae25c846a150d2d91f5"' }>
                                        <li class="link">
                                            <a href="injectables/CountriesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CountriesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CountryMasModule.html" data-type="entity-link" >CountryMasModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CountryMasModule-0bfb93f82295c867a8921b771fab7761"' : 'data-target="#xs-controllers-links-module-CountryMasModule-0bfb93f82295c867a8921b771fab7761"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CountryMasModule-0bfb93f82295c867a8921b771fab7761"' :
                                            'id="xs-controllers-links-module-CountryMasModule-0bfb93f82295c867a8921b771fab7761"' }>
                                            <li class="link">
                                                <a href="controllers/CountryController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CountryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CountryMasModule-0bfb93f82295c867a8921b771fab7761"' : 'data-target="#xs-injectables-links-module-CountryMasModule-0bfb93f82295c867a8921b771fab7761"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CountryMasModule-0bfb93f82295c867a8921b771fab7761"' :
                                        'id="xs-injectables-links-module-CountryMasModule-0bfb93f82295c867a8921b771fab7761"' }>
                                        <li class="link">
                                            <a href="injectables/CountriesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CountriesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CurrenciesModule.html" data-type="entity-link" >CurrenciesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CurrenciesModule-b06bb331cf2433ad1565394b856844a8"' : 'data-target="#xs-controllers-links-module-CurrenciesModule-b06bb331cf2433ad1565394b856844a8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CurrenciesModule-b06bb331cf2433ad1565394b856844a8"' :
                                            'id="xs-controllers-links-module-CurrenciesModule-b06bb331cf2433ad1565394b856844a8"' }>
                                            <li class="link">
                                                <a href="controllers/CurrenciesController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CurrenciesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CurrenciesModule-b06bb331cf2433ad1565394b856844a8"' : 'data-target="#xs-injectables-links-module-CurrenciesModule-b06bb331cf2433ad1565394b856844a8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CurrenciesModule-b06bb331cf2433ad1565394b856844a8"' :
                                        'id="xs-injectables-links-module-CurrenciesModule-b06bb331cf2433ad1565394b856844a8"' }>
                                        <li class="link">
                                            <a href="injectables/CurrenciesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CurrenciesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DocumentGroupModule.html" data-type="entity-link" >DocumentGroupModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-DocumentGroupModule-45a294cb4a91e3b86fabc0907f9c7d30"' : 'data-target="#xs-controllers-links-module-DocumentGroupModule-45a294cb4a91e3b86fabc0907f9c7d30"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DocumentGroupModule-45a294cb4a91e3b86fabc0907f9c7d30"' :
                                            'id="xs-controllers-links-module-DocumentGroupModule-45a294cb4a91e3b86fabc0907f9c7d30"' }>
                                            <li class="link">
                                                <a href="controllers/DocumentGroupController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DocumentGroupController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DocumentGroupModule-45a294cb4a91e3b86fabc0907f9c7d30"' : 'data-target="#xs-injectables-links-module-DocumentGroupModule-45a294cb4a91e3b86fabc0907f9c7d30"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DocumentGroupModule-45a294cb4a91e3b86fabc0907f9c7d30"' :
                                        'id="xs-injectables-links-module-DocumentGroupModule-45a294cb4a91e3b86fabc0907f9c7d30"' }>
                                        <li class="link">
                                            <a href="injectables/DocumentGroupService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DocumentGroupService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DocumentModule.html" data-type="entity-link" >DocumentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-DocumentModule-27f9da1a937a293229cd613239fc03d2"' : 'data-target="#xs-controllers-links-module-DocumentModule-27f9da1a937a293229cd613239fc03d2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DocumentModule-27f9da1a937a293229cd613239fc03d2"' :
                                            'id="xs-controllers-links-module-DocumentModule-27f9da1a937a293229cd613239fc03d2"' }>
                                            <li class="link">
                                                <a href="controllers/DocumentController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DocumentController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DocumentModule-27f9da1a937a293229cd613239fc03d2"' : 'data-target="#xs-injectables-links-module-DocumentModule-27f9da1a937a293229cd613239fc03d2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DocumentModule-27f9da1a937a293229cd613239fc03d2"' :
                                        'id="xs-injectables-links-module-DocumentModule-27f9da1a937a293229cd613239fc03d2"' }>
                                        <li class="link">
                                            <a href="injectables/DocumentService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DocumentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FilesLocalModule.html" data-type="entity-link" >FilesLocalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-FilesLocalModule-0caf7e20bc9c4db5b6b168d4ab8b542e"' : 'data-target="#xs-controllers-links-module-FilesLocalModule-0caf7e20bc9c4db5b6b168d4ab8b542e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FilesLocalModule-0caf7e20bc9c4db5b6b168d4ab8b542e"' :
                                            'id="xs-controllers-links-module-FilesLocalModule-0caf7e20bc9c4db5b6b168d4ab8b542e"' }>
                                            <li class="link">
                                                <a href="controllers/FilesLocalController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesLocalController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-FilesLocalModule-0caf7e20bc9c4db5b6b168d4ab8b542e"' : 'data-target="#xs-injectables-links-module-FilesLocalModule-0caf7e20bc9c4db5b6b168d4ab8b542e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FilesLocalModule-0caf7e20bc9c4db5b6b168d4ab8b542e"' :
                                        'id="xs-injectables-links-module-FilesLocalModule-0caf7e20bc9c4db5b6b168d4ab8b542e"' }>
                                        <li class="link">
                                            <a href="injectables/FilesLocalService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesLocalService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FilesModule.html" data-type="entity-link" >FilesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-FilesModule-69e6e6eb6f88ef2dba63dd956201e696"' : 'data-target="#xs-injectables-links-module-FilesModule-69e6e6eb6f88ef2dba63dd956201e696"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FilesModule-69e6e6eb6f88ef2dba63dd956201e696"' :
                                        'id="xs-injectables-links-module-FilesModule-69e6e6eb6f88ef2dba63dd956201e696"' }>
                                        <li class="link">
                                            <a href="injectables/FilesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FilesS3Module.html" data-type="entity-link" >FilesS3Module</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-FilesS3Module-038e8b30ed538fc3979f17a7f4642535"' : 'data-target="#xs-controllers-links-module-FilesS3Module-038e8b30ed538fc3979f17a7f4642535"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FilesS3Module-038e8b30ed538fc3979f17a7f4642535"' :
                                            'id="xs-controllers-links-module-FilesS3Module-038e8b30ed538fc3979f17a7f4642535"' }>
                                            <li class="link">
                                                <a href="controllers/FilesS3Controller.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesS3Controller</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-FilesS3Module-038e8b30ed538fc3979f17a7f4642535"' : 'data-target="#xs-injectables-links-module-FilesS3Module-038e8b30ed538fc3979f17a7f4642535"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FilesS3Module-038e8b30ed538fc3979f17a7f4642535"' :
                                        'id="xs-injectables-links-module-FilesS3Module-038e8b30ed538fc3979f17a7f4642535"' }>
                                        <li class="link">
                                            <a href="injectables/FilesS3Service.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesS3Service</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FilesS3PresignedModule.html" data-type="entity-link" >FilesS3PresignedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-FilesS3PresignedModule-5e60758f6272ae2d323ca6f31271d22f"' : 'data-target="#xs-controllers-links-module-FilesS3PresignedModule-5e60758f6272ae2d323ca6f31271d22f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FilesS3PresignedModule-5e60758f6272ae2d323ca6f31271d22f"' :
                                            'id="xs-controllers-links-module-FilesS3PresignedModule-5e60758f6272ae2d323ca6f31271d22f"' }>
                                            <li class="link">
                                                <a href="controllers/FilesS3PresignedController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesS3PresignedController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-FilesS3PresignedModule-5e60758f6272ae2d323ca6f31271d22f"' : 'data-target="#xs-injectables-links-module-FilesS3PresignedModule-5e60758f6272ae2d323ca6f31271d22f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FilesS3PresignedModule-5e60758f6272ae2d323ca6f31271d22f"' :
                                        'id="xs-injectables-links-module-FilesS3PresignedModule-5e60758f6272ae2d323ca6f31271d22f"' }>
                                        <li class="link">
                                            <a href="injectables/FilesS3PresignedService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesS3PresignedService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HelperModule.html" data-type="entity-link" >HelperModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-HelperModule-66f44867ee055722668322430579f15a"' : 'data-target="#xs-injectables-links-module-HelperModule-66f44867ee055722668322430579f15a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HelperModule-66f44867ee055722668322430579f15a"' :
                                        'id="xs-injectables-links-module-HelperModule-66f44867ee055722668322430579f15a"' }>
                                        <li class="link">
                                            <a href="injectables/PaginationService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaginationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-HomeModule-807e765eeb1f40f03a144f6bc0430d2e"' : 'data-target="#xs-controllers-links-module-HomeModule-807e765eeb1f40f03a144f6bc0430d2e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HomeModule-807e765eeb1f40f03a144f6bc0430d2e"' :
                                            'id="xs-controllers-links-module-HomeModule-807e765eeb1f40f03a144f6bc0430d2e"' }>
                                            <li class="link">
                                                <a href="controllers/HomeController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-HomeModule-807e765eeb1f40f03a144f6bc0430d2e"' : 'data-target="#xs-injectables-links-module-HomeModule-807e765eeb1f40f03a144f6bc0430d2e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HomeModule-807e765eeb1f40f03a144f6bc0430d2e"' :
                                        'id="xs-injectables-links-module-HomeModule-807e765eeb1f40f03a144f6bc0430d2e"' }>
                                        <li class="link">
                                            <a href="injectables/HomeService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StateModule.html" data-type="entity-link" >StateModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-StateModule-a1f1f1192e00b2066ee17a61628a833e"' : 'data-target="#xs-controllers-links-module-StateModule-a1f1f1192e00b2066ee17a61628a833e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StateModule-a1f1f1192e00b2066ee17a61628a833e"' :
                                            'id="xs-controllers-links-module-StateModule-a1f1f1192e00b2066ee17a61628a833e"' }>
                                            <li class="link">
                                                <a href="controllers/StateController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StateController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-StateModule-a1f1f1192e00b2066ee17a61628a833e"' : 'data-target="#xs-injectables-links-module-StateModule-a1f1f1192e00b2066ee17a61628a833e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StateModule-a1f1f1192e00b2066ee17a61628a833e"' :
                                        'id="xs-injectables-links-module-StateModule-a1f1f1192e00b2066ee17a61628a833e"' }>
                                        <li class="link">
                                            <a href="injectables/StateService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StateService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AddressTypeController.html" data-type="entity-link" >AddressTypeController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BankController.html" data-type="entity-link" >BankController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CityController.html" data-type="entity-link" >CityController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ContactController.html" data-type="entity-link" >ContactController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CountriesController.html" data-type="entity-link" >CountriesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CountryController.html" data-type="entity-link" >CountryController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CurrenciesController.html" data-type="entity-link" >CurrenciesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DocumentController.html" data-type="entity-link" >DocumentController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DocumentGroupController.html" data-type="entity-link" >DocumentGroupController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FilesLocalController.html" data-type="entity-link" >FilesLocalController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FilesS3Controller.html" data-type="entity-link" >FilesS3Controller</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FilesS3PresignedController.html" data-type="entity-link" >FilesS3PresignedController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HomeController.html" data-type="entity-link" >HomeController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/StateController.html" data-type="entity-link" >StateController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AddressType.html" data-type="entity-link" >AddressType</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddressUpdateDto.html" data-type="entity-link" >AddressUpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddresTypeDto.html" data-type="entity-link" >AddresTypeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AllExceptionsFilter.html" data-type="entity-link" >AllExceptionsFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/BadRequestExceptionFilter.html" data-type="entity-link" >BadRequestExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/BankDto.html" data-type="entity-link" >BankDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Banks.html" data-type="entity-link" >Banks</a>
                            </li>
                            <li class="link">
                                <a href="classes/BankUpdateDto.html" data-type="entity-link" >BankUpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Cities.html" data-type="entity-link" >Cities</a>
                            </li>
                            <li class="link">
                                <a href="classes/CityDto.html" data-type="entity-link" >CityDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommonQuery1.html" data-type="entity-link" >CommonQuery1</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommonQuery5.html" data-type="entity-link" >CommonQuery5</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConfigService.html" data-type="entity-link" >ConfigService</a>
                            </li>
                            <li class="link">
                                <a href="classes/ContactDto.html" data-type="entity-link" >ContactDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Country.html" data-type="entity-link" >Country</a>
                            </li>
                            <li class="link">
                                <a href="classes/CountryDto.html" data-type="entity-link" >CountryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CountryMas.html" data-type="entity-link" >CountryMas</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCountryDto.html" data-type="entity-link" >CreateCountryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDto.html" data-type="entity-link" >CreateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Currency.html" data-type="entity-link" >Currency</a>
                            </li>
                            <li class="link">
                                <a href="classes/Document.html" data-type="entity-link" >Document</a>
                            </li>
                            <li class="link">
                                <a href="classes/DocumentDto.html" data-type="entity-link" >DocumentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DocumentGroup.html" data-type="entity-link" >DocumentGroup</a>
                            </li>
                            <li class="link">
                                <a href="classes/DocumentGroupDto.html" data-type="entity-link" >DocumentGroupDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DynamicQueryBuilder.html" data-type="entity-link" >DynamicQueryBuilder</a>
                            </li>
                            <li class="link">
                                <a href="classes/EnvironmentVariablesValidator.html" data-type="entity-link" >EnvironmentVariablesValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/EnvironmentVariablesValidator-1.html" data-type="entity-link" >EnvironmentVariablesValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/EnvironmentVariablesValidator-2.html" data-type="entity-link" >EnvironmentVariablesValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/EnvironmentVariablesValidator-3.html" data-type="entity-link" >EnvironmentVariablesValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/EnvVarAppConfigValidator.html" data-type="entity-link" >EnvVarAppConfigValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/FileNotImageException.html" data-type="entity-link" >FileNotImageException</a>
                            </li>
                            <li class="link">
                                <a href="classes/FileResponseDto.html" data-type="entity-link" >FileResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FileResponseDto-1.html" data-type="entity-link" >FileResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FileResponseDto-2.html" data-type="entity-link" >FileResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FileType.html" data-type="entity-link" >FileType</a>
                            </li>
                            <li class="link">
                                <a href="classes/FileUploadDto.html" data-type="entity-link" >FileUploadDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FilterCountryDto.html" data-type="entity-link" >FilterCountryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FilterQueryDto.html" data-type="entity-link" >FilterQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpErrorFilter.html" data-type="entity-link" >HttpErrorFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginationMetaDto.html" data-type="entity-link" >PaginationMetaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginationQueryDto.html" data-type="entity-link" >PaginationQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginationResponseDto.html" data-type="entity-link" >PaginationResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PrismaClientExceptionFilter.html" data-type="entity-link" >PrismaClientExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/Query.html" data-type="entity-link" >Query</a>
                            </li>
                            <li class="link">
                                <a href="classes/Query-1.html" data-type="entity-link" >Query</a>
                            </li>
                            <li class="link">
                                <a href="classes/Query-2.html" data-type="entity-link" >Query</a>
                            </li>
                            <li class="link">
                                <a href="classes/Query-3.html" data-type="entity-link" >Query</a>
                            </li>
                            <li class="link">
                                <a href="classes/Query-4.html" data-type="entity-link" >Query</a>
                            </li>
                            <li class="link">
                                <a href="classes/Query-5.html" data-type="entity-link" >Query</a>
                            </li>
                            <li class="link">
                                <a href="classes/Query-6.html" data-type="entity-link" >Query</a>
                            </li>
                            <li class="link">
                                <a href="classes/Query-7.html" data-type="entity-link" >Query</a>
                            </li>
                            <li class="link">
                                <a href="classes/Query-8.html" data-type="entity-link" >Query</a>
                            </li>
                            <li class="link">
                                <a href="classes/Query-9.html" data-type="entity-link" >Query</a>
                            </li>
                            <li class="link">
                                <a href="classes/Query-10.html" data-type="entity-link" >Query</a>
                            </li>
                            <li class="link">
                                <a href="classes/QueryCountryDto.html" data-type="entity-link" >QueryCountryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/QueryFailedFilter.html" data-type="entity-link" >QueryFailedFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/SortByDto.html" data-type="entity-link" >SortByDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SortCountryDto.html" data-type="entity-link" >SortCountryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/State.html" data-type="entity-link" >State</a>
                            </li>
                            <li class="link">
                                <a href="classes/StateDto.html" data-type="entity-link" >StateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDto.html" data-type="entity-link" >UpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDto-1.html" data-type="entity-link" >UpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDto-2.html" data-type="entity-link" >UpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDto-3.html" data-type="entity-link" >UpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDto-4.html" data-type="entity-link" >UpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDto-5.html" data-type="entity-link" >UpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDto-6.html" data-type="entity-link" >UpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserNotFoundException.html" data-type="entity-link" >UserNotFoundException</a>
                            </li>
                            <li class="link">
                                <a href="classes/UtilsService.html" data-type="entity-link" >UtilsService</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AddressTypeService.html" data-type="entity-link" >AddressTypeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BankService.html" data-type="entity-link" >BankService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CityService.html" data-type="entity-link" >CityService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommaSeparated.html" data-type="entity-link" >CommaSeparated</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContactService.html" data-type="entity-link" >ContactService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CountriesService.html" data-type="entity-link" >CountriesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CountriesService-1.html" data-type="entity-link" >CountriesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CurrenciesService.html" data-type="entity-link" >CurrenciesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DocumentGroupService.html" data-type="entity-link" >DocumentGroupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DocumentService.html" data-type="entity-link" >DocumentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilesLocalService.html" data-type="entity-link" >FilesLocalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilesS3PresignedService.html" data-type="entity-link" >FilesS3PresignedService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilesS3Service.html" data-type="entity-link" >FilesS3Service</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilesService.html" data-type="entity-link" >FilesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HomeService.html" data-type="entity-link" >HomeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaginationService.html" data-type="entity-link" >PaginationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResolvePromisesInterceptor.html" data-type="entity-link" >ResolvePromisesInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SortBy.html" data-type="entity-link" >SortBy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StateService.html" data-type="entity-link" >StateService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IAppConfig.html" data-type="entity-link" >IAppConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAwsConfig.html" data-type="entity-link" >IAwsConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFileConfig.html" data-type="entity-link" >IFileConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IJWTConfig.html" data-type="entity-link" >IJWTConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INodeEmailerConfig.html" data-type="entity-link" >INodeEmailerConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPageMetaDtoParameters.html" data-type="entity-link" >IPageMetaDtoParameters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPaginationFieldConfig.html" data-type="entity-link" >IPaginationFieldConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPostgreSQLConfig.html" data-type="entity-link" >IPostgreSQLConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISendGridConfig.html" data-type="entity-link" >ISendGridConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISMSConfig.html" data-type="entity-link" >ISMSConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUploadFileConfig.html" data-type="entity-link" >IUploadFileConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QueryConfig.html" data-type="entity-link" >QueryConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QueryOptions.html" data-type="entity-link" >QueryOptions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});