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
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/ApiModule.html" data-type="entity-link" >ApiModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-624a035e4f215df8824c08a10e446c9197632c5017064bf7f99aec0fb6f92cc3c54dc6d7a38aa90c14b8a1896df679fd79067648f72ed374d3550774381906e3"' : 'data-bs-target="#xs-controllers-links-module-AppModule-624a035e4f215df8824c08a10e446c9197632c5017064bf7f99aec0fb6f92cc3c54dc6d7a38aa90c14b8a1896df679fd79067648f72ed374d3550774381906e3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-624a035e4f215df8824c08a10e446c9197632c5017064bf7f99aec0fb6f92cc3c54dc6d7a38aa90c14b8a1896df679fd79067648f72ed374d3550774381906e3"' :
                                            'id="xs-controllers-links-module-AppModule-624a035e4f215df8824c08a10e446c9197632c5017064bf7f99aec0fb6f92cc3c54dc6d7a38aa90c14b8a1896df679fd79067648f72ed374d3550774381906e3"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BankModule.html" data-type="entity-link" >BankModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-BankModule-9f5de103b50f6b634bd78045766bd8bb1a7649f3e3bb7b897fe8f4cdef60707a0dfd3c8c68ec665b3fd862b108804922ae8acbce3b8e7ce308d0736ef3c081b2"' : 'data-bs-target="#xs-controllers-links-module-BankModule-9f5de103b50f6b634bd78045766bd8bb1a7649f3e3bb7b897fe8f4cdef60707a0dfd3c8c68ec665b3fd862b108804922ae8acbce3b8e7ce308d0736ef3c081b2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BankModule-9f5de103b50f6b634bd78045766bd8bb1a7649f3e3bb7b897fe8f4cdef60707a0dfd3c8c68ec665b3fd862b108804922ae8acbce3b8e7ce308d0736ef3c081b2"' :
                                            'id="xs-controllers-links-module-BankModule-9f5de103b50f6b634bd78045766bd8bb1a7649f3e3bb7b897fe8f4cdef60707a0dfd3c8c68ec665b3fd862b108804922ae8acbce3b8e7ce308d0736ef3c081b2"' }>
                                            <li class="link">
                                                <a href="controllers/BankController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BankController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BankModule-9f5de103b50f6b634bd78045766bd8bb1a7649f3e3bb7b897fe8f4cdef60707a0dfd3c8c68ec665b3fd862b108804922ae8acbce3b8e7ce308d0736ef3c081b2"' : 'data-bs-target="#xs-injectables-links-module-BankModule-9f5de103b50f6b634bd78045766bd8bb1a7649f3e3bb7b897fe8f4cdef60707a0dfd3c8c68ec665b3fd862b108804922ae8acbce3b8e7ce308d0736ef3c081b2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BankModule-9f5de103b50f6b634bd78045766bd8bb1a7649f3e3bb7b897fe8f4cdef60707a0dfd3c8c68ec665b3fd862b108804922ae8acbce3b8e7ce308d0736ef3c081b2"' :
                                        'id="xs-injectables-links-module-BankModule-9f5de103b50f6b634bd78045766bd8bb1a7649f3e3bb7b897fe8f4cdef60707a0dfd3c8c68ec665b3fd862b108804922ae8acbce3b8e7ce308d0736ef3c081b2"' }>
                                        <li class="link">
                                            <a href="injectables/BankService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BankService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CityModule.html" data-type="entity-link" >CityModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CityModule-0ea79f6b754d51f3fe786db875635efa53b28d7ea2557d7a63ee9bd19332a48a6df42a2d00d0f98a312e6aa719e9303ff140327ae8d21d7340d885063a4645b1"' : 'data-bs-target="#xs-controllers-links-module-CityModule-0ea79f6b754d51f3fe786db875635efa53b28d7ea2557d7a63ee9bd19332a48a6df42a2d00d0f98a312e6aa719e9303ff140327ae8d21d7340d885063a4645b1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CityModule-0ea79f6b754d51f3fe786db875635efa53b28d7ea2557d7a63ee9bd19332a48a6df42a2d00d0f98a312e6aa719e9303ff140327ae8d21d7340d885063a4645b1"' :
                                            'id="xs-controllers-links-module-CityModule-0ea79f6b754d51f3fe786db875635efa53b28d7ea2557d7a63ee9bd19332a48a6df42a2d00d0f98a312e6aa719e9303ff140327ae8d21d7340d885063a4645b1"' }>
                                            <li class="link">
                                                <a href="controllers/CityController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CityController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CityModule-0ea79f6b754d51f3fe786db875635efa53b28d7ea2557d7a63ee9bd19332a48a6df42a2d00d0f98a312e6aa719e9303ff140327ae8d21d7340d885063a4645b1"' : 'data-bs-target="#xs-injectables-links-module-CityModule-0ea79f6b754d51f3fe786db875635efa53b28d7ea2557d7a63ee9bd19332a48a6df42a2d00d0f98a312e6aa719e9303ff140327ae8d21d7340d885063a4645b1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CityModule-0ea79f6b754d51f3fe786db875635efa53b28d7ea2557d7a63ee9bd19332a48a6df42a2d00d0f98a312e6aa719e9303ff140327ae8d21d7340d885063a4645b1"' :
                                        'id="xs-injectables-links-module-CityModule-0ea79f6b754d51f3fe786db875635efa53b28d7ea2557d7a63ee9bd19332a48a6df42a2d00d0f98a312e6aa719e9303ff140327ae8d21d7340d885063a4645b1"' }>
                                        <li class="link">
                                            <a href="injectables/CityService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CityService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CountriesModule.html" data-type="entity-link" >CountriesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CountriesModule-364aa546ef382132e04e3b361592365562b34f33b7cb9fcd7eed2eaf4fe611d9292f0249c0aebfe4134838c1e28df21fcbb3da9540f445f80f65bf6edf96f8ce"' : 'data-bs-target="#xs-controllers-links-module-CountriesModule-364aa546ef382132e04e3b361592365562b34f33b7cb9fcd7eed2eaf4fe611d9292f0249c0aebfe4134838c1e28df21fcbb3da9540f445f80f65bf6edf96f8ce"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CountriesModule-364aa546ef382132e04e3b361592365562b34f33b7cb9fcd7eed2eaf4fe611d9292f0249c0aebfe4134838c1e28df21fcbb3da9540f445f80f65bf6edf96f8ce"' :
                                            'id="xs-controllers-links-module-CountriesModule-364aa546ef382132e04e3b361592365562b34f33b7cb9fcd7eed2eaf4fe611d9292f0249c0aebfe4134838c1e28df21fcbb3da9540f445f80f65bf6edf96f8ce"' }>
                                            <li class="link">
                                                <a href="controllers/CountriesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CountriesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CountriesModule-364aa546ef382132e04e3b361592365562b34f33b7cb9fcd7eed2eaf4fe611d9292f0249c0aebfe4134838c1e28df21fcbb3da9540f445f80f65bf6edf96f8ce"' : 'data-bs-target="#xs-injectables-links-module-CountriesModule-364aa546ef382132e04e3b361592365562b34f33b7cb9fcd7eed2eaf4fe611d9292f0249c0aebfe4134838c1e28df21fcbb3da9540f445f80f65bf6edf96f8ce"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CountriesModule-364aa546ef382132e04e3b361592365562b34f33b7cb9fcd7eed2eaf4fe611d9292f0249c0aebfe4134838c1e28df21fcbb3da9540f445f80f65bf6edf96f8ce"' :
                                        'id="xs-injectables-links-module-CountriesModule-364aa546ef382132e04e3b361592365562b34f33b7cb9fcd7eed2eaf4fe611d9292f0249c0aebfe4134838c1e28df21fcbb3da9540f445f80f65bf6edf96f8ce"' }>
                                        <li class="link">
                                            <a href="injectables/CountriesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CountriesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CountryMasModule.html" data-type="entity-link" >CountryMasModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CountryMasModule-edd04cd225b32a84f4989dd76b10ef42ae301c27715d2b14d57bee2ccfd7f38d9119bda3911637341e243c16c73cf3fc419b160228052534b6b3a7e2865816c6"' : 'data-bs-target="#xs-controllers-links-module-CountryMasModule-edd04cd225b32a84f4989dd76b10ef42ae301c27715d2b14d57bee2ccfd7f38d9119bda3911637341e243c16c73cf3fc419b160228052534b6b3a7e2865816c6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CountryMasModule-edd04cd225b32a84f4989dd76b10ef42ae301c27715d2b14d57bee2ccfd7f38d9119bda3911637341e243c16c73cf3fc419b160228052534b6b3a7e2865816c6"' :
                                            'id="xs-controllers-links-module-CountryMasModule-edd04cd225b32a84f4989dd76b10ef42ae301c27715d2b14d57bee2ccfd7f38d9119bda3911637341e243c16c73cf3fc419b160228052534b6b3a7e2865816c6"' }>
                                            <li class="link">
                                                <a href="controllers/CountryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CountryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CountryMasModule-edd04cd225b32a84f4989dd76b10ef42ae301c27715d2b14d57bee2ccfd7f38d9119bda3911637341e243c16c73cf3fc419b160228052534b6b3a7e2865816c6"' : 'data-bs-target="#xs-injectables-links-module-CountryMasModule-edd04cd225b32a84f4989dd76b10ef42ae301c27715d2b14d57bee2ccfd7f38d9119bda3911637341e243c16c73cf3fc419b160228052534b6b3a7e2865816c6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CountryMasModule-edd04cd225b32a84f4989dd76b10ef42ae301c27715d2b14d57bee2ccfd7f38d9119bda3911637341e243c16c73cf3fc419b160228052534b6b3a7e2865816c6"' :
                                        'id="xs-injectables-links-module-CountryMasModule-edd04cd225b32a84f4989dd76b10ef42ae301c27715d2b14d57bee2ccfd7f38d9119bda3911637341e243c16c73cf3fc419b160228052534b6b3a7e2865816c6"' }>
                                        <li class="link">
                                            <a href="injectables/CountriesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CountriesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CurrenciesModule.html" data-type="entity-link" >CurrenciesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CurrenciesModule-66cf2b0e292c7ce66571a8a8154d75af097d10af4f20b2127842b45e7af2d5d30e65415b6f386cfabc1251a07d9938c66b1006442a78fce8b7e7fb3db2b44acd"' : 'data-bs-target="#xs-controllers-links-module-CurrenciesModule-66cf2b0e292c7ce66571a8a8154d75af097d10af4f20b2127842b45e7af2d5d30e65415b6f386cfabc1251a07d9938c66b1006442a78fce8b7e7fb3db2b44acd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CurrenciesModule-66cf2b0e292c7ce66571a8a8154d75af097d10af4f20b2127842b45e7af2d5d30e65415b6f386cfabc1251a07d9938c66b1006442a78fce8b7e7fb3db2b44acd"' :
                                            'id="xs-controllers-links-module-CurrenciesModule-66cf2b0e292c7ce66571a8a8154d75af097d10af4f20b2127842b45e7af2d5d30e65415b6f386cfabc1251a07d9938c66b1006442a78fce8b7e7fb3db2b44acd"' }>
                                            <li class="link">
                                                <a href="controllers/CurrenciesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CurrenciesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CurrenciesModule-66cf2b0e292c7ce66571a8a8154d75af097d10af4f20b2127842b45e7af2d5d30e65415b6f386cfabc1251a07d9938c66b1006442a78fce8b7e7fb3db2b44acd"' : 'data-bs-target="#xs-injectables-links-module-CurrenciesModule-66cf2b0e292c7ce66571a8a8154d75af097d10af4f20b2127842b45e7af2d5d30e65415b6f386cfabc1251a07d9938c66b1006442a78fce8b7e7fb3db2b44acd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CurrenciesModule-66cf2b0e292c7ce66571a8a8154d75af097d10af4f20b2127842b45e7af2d5d30e65415b6f386cfabc1251a07d9938c66b1006442a78fce8b7e7fb3db2b44acd"' :
                                        'id="xs-injectables-links-module-CurrenciesModule-66cf2b0e292c7ce66571a8a8154d75af097d10af4f20b2127842b45e7af2d5d30e65415b6f386cfabc1251a07d9938c66b1006442a78fce8b7e7fb3db2b44acd"' }>
                                        <li class="link">
                                            <a href="injectables/CurrenciesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CurrenciesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DocumentGroupModule.html" data-type="entity-link" >DocumentGroupModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DocumentGroupModule-abbf2cad852ec9b2a2b6a630737d8a6082ac518024f65079d2880b46b23d44bef7d84df16b5353dd4d0c6e7e5771af04b66bd16a9c28c18093143a50176ba1d4"' : 'data-bs-target="#xs-controllers-links-module-DocumentGroupModule-abbf2cad852ec9b2a2b6a630737d8a6082ac518024f65079d2880b46b23d44bef7d84df16b5353dd4d0c6e7e5771af04b66bd16a9c28c18093143a50176ba1d4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DocumentGroupModule-abbf2cad852ec9b2a2b6a630737d8a6082ac518024f65079d2880b46b23d44bef7d84df16b5353dd4d0c6e7e5771af04b66bd16a9c28c18093143a50176ba1d4"' :
                                            'id="xs-controllers-links-module-DocumentGroupModule-abbf2cad852ec9b2a2b6a630737d8a6082ac518024f65079d2880b46b23d44bef7d84df16b5353dd4d0c6e7e5771af04b66bd16a9c28c18093143a50176ba1d4"' }>
                                            <li class="link">
                                                <a href="controllers/DocumentGroupController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DocumentGroupController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DocumentGroupModule-abbf2cad852ec9b2a2b6a630737d8a6082ac518024f65079d2880b46b23d44bef7d84df16b5353dd4d0c6e7e5771af04b66bd16a9c28c18093143a50176ba1d4"' : 'data-bs-target="#xs-injectables-links-module-DocumentGroupModule-abbf2cad852ec9b2a2b6a630737d8a6082ac518024f65079d2880b46b23d44bef7d84df16b5353dd4d0c6e7e5771af04b66bd16a9c28c18093143a50176ba1d4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DocumentGroupModule-abbf2cad852ec9b2a2b6a630737d8a6082ac518024f65079d2880b46b23d44bef7d84df16b5353dd4d0c6e7e5771af04b66bd16a9c28c18093143a50176ba1d4"' :
                                        'id="xs-injectables-links-module-DocumentGroupModule-abbf2cad852ec9b2a2b6a630737d8a6082ac518024f65079d2880b46b23d44bef7d84df16b5353dd4d0c6e7e5771af04b66bd16a9c28c18093143a50176ba1d4"' }>
                                        <li class="link">
                                            <a href="injectables/DocumentGroupService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DocumentGroupService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DocumentModule.html" data-type="entity-link" >DocumentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DocumentModule-f91bb8e15db668490cd7e0b92815f1eb2de9e6923ff36adb177762e15faf54c889e9ad1a64a0d2c4133e7812184f550d0fa5b3d1e237fe96557617687496d75d"' : 'data-bs-target="#xs-controllers-links-module-DocumentModule-f91bb8e15db668490cd7e0b92815f1eb2de9e6923ff36adb177762e15faf54c889e9ad1a64a0d2c4133e7812184f550d0fa5b3d1e237fe96557617687496d75d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DocumentModule-f91bb8e15db668490cd7e0b92815f1eb2de9e6923ff36adb177762e15faf54c889e9ad1a64a0d2c4133e7812184f550d0fa5b3d1e237fe96557617687496d75d"' :
                                            'id="xs-controllers-links-module-DocumentModule-f91bb8e15db668490cd7e0b92815f1eb2de9e6923ff36adb177762e15faf54c889e9ad1a64a0d2c4133e7812184f550d0fa5b3d1e237fe96557617687496d75d"' }>
                                            <li class="link">
                                                <a href="controllers/DocumentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DocumentController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DocumentModule-f91bb8e15db668490cd7e0b92815f1eb2de9e6923ff36adb177762e15faf54c889e9ad1a64a0d2c4133e7812184f550d0fa5b3d1e237fe96557617687496d75d"' : 'data-bs-target="#xs-injectables-links-module-DocumentModule-f91bb8e15db668490cd7e0b92815f1eb2de9e6923ff36adb177762e15faf54c889e9ad1a64a0d2c4133e7812184f550d0fa5b3d1e237fe96557617687496d75d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DocumentModule-f91bb8e15db668490cd7e0b92815f1eb2de9e6923ff36adb177762e15faf54c889e9ad1a64a0d2c4133e7812184f550d0fa5b3d1e237fe96557617687496d75d"' :
                                        'id="xs-injectables-links-module-DocumentModule-f91bb8e15db668490cd7e0b92815f1eb2de9e6923ff36adb177762e15faf54c889e9ad1a64a0d2c4133e7812184f550d0fa5b3d1e237fe96557617687496d75d"' }>
                                        <li class="link">
                                            <a href="injectables/DocumentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DocumentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FilesLocalModule.html" data-type="entity-link" >FilesLocalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FilesLocalModule-88effde3efce1b553704ac429867754890044b85ca9b7f448db3165e365b0844468b53f4f0471707863d1c56a7a094bf0f450403fad704547beba7e5f504bc5e"' : 'data-bs-target="#xs-controllers-links-module-FilesLocalModule-88effde3efce1b553704ac429867754890044b85ca9b7f448db3165e365b0844468b53f4f0471707863d1c56a7a094bf0f450403fad704547beba7e5f504bc5e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FilesLocalModule-88effde3efce1b553704ac429867754890044b85ca9b7f448db3165e365b0844468b53f4f0471707863d1c56a7a094bf0f450403fad704547beba7e5f504bc5e"' :
                                            'id="xs-controllers-links-module-FilesLocalModule-88effde3efce1b553704ac429867754890044b85ca9b7f448db3165e365b0844468b53f4f0471707863d1c56a7a094bf0f450403fad704547beba7e5f504bc5e"' }>
                                            <li class="link">
                                                <a href="controllers/FilesLocalController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesLocalController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FilesLocalModule-88effde3efce1b553704ac429867754890044b85ca9b7f448db3165e365b0844468b53f4f0471707863d1c56a7a094bf0f450403fad704547beba7e5f504bc5e"' : 'data-bs-target="#xs-injectables-links-module-FilesLocalModule-88effde3efce1b553704ac429867754890044b85ca9b7f448db3165e365b0844468b53f4f0471707863d1c56a7a094bf0f450403fad704547beba7e5f504bc5e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FilesLocalModule-88effde3efce1b553704ac429867754890044b85ca9b7f448db3165e365b0844468b53f4f0471707863d1c56a7a094bf0f450403fad704547beba7e5f504bc5e"' :
                                        'id="xs-injectables-links-module-FilesLocalModule-88effde3efce1b553704ac429867754890044b85ca9b7f448db3165e365b0844468b53f4f0471707863d1c56a7a094bf0f450403fad704547beba7e5f504bc5e"' }>
                                        <li class="link">
                                            <a href="injectables/FilesLocalService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesLocalService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FilesModule.html" data-type="entity-link" >FilesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FilesModule-275977d73e4046374f9a961c1260466571c3b34cf3d7f8a01a0f359221661ebb5e3e34eb03c83e40469e14bdc4e2fe676e288646781260ea5d655eed02e364a3"' : 'data-bs-target="#xs-injectables-links-module-FilesModule-275977d73e4046374f9a961c1260466571c3b34cf3d7f8a01a0f359221661ebb5e3e34eb03c83e40469e14bdc4e2fe676e288646781260ea5d655eed02e364a3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FilesModule-275977d73e4046374f9a961c1260466571c3b34cf3d7f8a01a0f359221661ebb5e3e34eb03c83e40469e14bdc4e2fe676e288646781260ea5d655eed02e364a3"' :
                                        'id="xs-injectables-links-module-FilesModule-275977d73e4046374f9a961c1260466571c3b34cf3d7f8a01a0f359221661ebb5e3e34eb03c83e40469e14bdc4e2fe676e288646781260ea5d655eed02e364a3"' }>
                                        <li class="link">
                                            <a href="injectables/FilesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FilesS3Module.html" data-type="entity-link" >FilesS3Module</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FilesS3Module-de6463fce99072a6da769ab574620c898a428b1a96192516cc57b58e46e306bc3717aa61b3029880312b2cd63499a582c98ed19ebf8a5cee64f35cdd7735341c"' : 'data-bs-target="#xs-controllers-links-module-FilesS3Module-de6463fce99072a6da769ab574620c898a428b1a96192516cc57b58e46e306bc3717aa61b3029880312b2cd63499a582c98ed19ebf8a5cee64f35cdd7735341c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FilesS3Module-de6463fce99072a6da769ab574620c898a428b1a96192516cc57b58e46e306bc3717aa61b3029880312b2cd63499a582c98ed19ebf8a5cee64f35cdd7735341c"' :
                                            'id="xs-controllers-links-module-FilesS3Module-de6463fce99072a6da769ab574620c898a428b1a96192516cc57b58e46e306bc3717aa61b3029880312b2cd63499a582c98ed19ebf8a5cee64f35cdd7735341c"' }>
                                            <li class="link">
                                                <a href="controllers/FilesS3Controller.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesS3Controller</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FilesS3Module-de6463fce99072a6da769ab574620c898a428b1a96192516cc57b58e46e306bc3717aa61b3029880312b2cd63499a582c98ed19ebf8a5cee64f35cdd7735341c"' : 'data-bs-target="#xs-injectables-links-module-FilesS3Module-de6463fce99072a6da769ab574620c898a428b1a96192516cc57b58e46e306bc3717aa61b3029880312b2cd63499a582c98ed19ebf8a5cee64f35cdd7735341c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FilesS3Module-de6463fce99072a6da769ab574620c898a428b1a96192516cc57b58e46e306bc3717aa61b3029880312b2cd63499a582c98ed19ebf8a5cee64f35cdd7735341c"' :
                                        'id="xs-injectables-links-module-FilesS3Module-de6463fce99072a6da769ab574620c898a428b1a96192516cc57b58e46e306bc3717aa61b3029880312b2cd63499a582c98ed19ebf8a5cee64f35cdd7735341c"' }>
                                        <li class="link">
                                            <a href="injectables/FilesS3Service.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesS3Service</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FilesS3PresignedModule.html" data-type="entity-link" >FilesS3PresignedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FilesS3PresignedModule-2787e5211bb195f43c5430aeed35781fbb8a50f9acf572bd904f0b1342d3e9356a28f01702bb13c05a39799164c787d0fc4206f60b6fc47d03f61e9e9047d0f7"' : 'data-bs-target="#xs-controllers-links-module-FilesS3PresignedModule-2787e5211bb195f43c5430aeed35781fbb8a50f9acf572bd904f0b1342d3e9356a28f01702bb13c05a39799164c787d0fc4206f60b6fc47d03f61e9e9047d0f7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FilesS3PresignedModule-2787e5211bb195f43c5430aeed35781fbb8a50f9acf572bd904f0b1342d3e9356a28f01702bb13c05a39799164c787d0fc4206f60b6fc47d03f61e9e9047d0f7"' :
                                            'id="xs-controllers-links-module-FilesS3PresignedModule-2787e5211bb195f43c5430aeed35781fbb8a50f9acf572bd904f0b1342d3e9356a28f01702bb13c05a39799164c787d0fc4206f60b6fc47d03f61e9e9047d0f7"' }>
                                            <li class="link">
                                                <a href="controllers/FilesS3PresignedController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesS3PresignedController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FilesS3PresignedModule-2787e5211bb195f43c5430aeed35781fbb8a50f9acf572bd904f0b1342d3e9356a28f01702bb13c05a39799164c787d0fc4206f60b6fc47d03f61e9e9047d0f7"' : 'data-bs-target="#xs-injectables-links-module-FilesS3PresignedModule-2787e5211bb195f43c5430aeed35781fbb8a50f9acf572bd904f0b1342d3e9356a28f01702bb13c05a39799164c787d0fc4206f60b6fc47d03f61e9e9047d0f7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FilesS3PresignedModule-2787e5211bb195f43c5430aeed35781fbb8a50f9acf572bd904f0b1342d3e9356a28f01702bb13c05a39799164c787d0fc4206f60b6fc47d03f61e9e9047d0f7"' :
                                        'id="xs-injectables-links-module-FilesS3PresignedModule-2787e5211bb195f43c5430aeed35781fbb8a50f9acf572bd904f0b1342d3e9356a28f01702bb13c05a39799164c787d0fc4206f60b6fc47d03f61e9e9047d0f7"' }>
                                        <li class="link">
                                            <a href="injectables/FilesS3PresignedService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesS3PresignedService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HelperModule.html" data-type="entity-link" >HelperModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-HelperModule-4e69de9f7b5e4b73cefa085d490bf44d8ab65cdcedf58e1362121c61242204cb9414a5116061506b5ca5cf98479ad6cb43548663ab02746d82aa59c00b779f78"' : 'data-bs-target="#xs-injectables-links-module-HelperModule-4e69de9f7b5e4b73cefa085d490bf44d8ab65cdcedf58e1362121c61242204cb9414a5116061506b5ca5cf98479ad6cb43548663ab02746d82aa59c00b779f78"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HelperModule-4e69de9f7b5e4b73cefa085d490bf44d8ab65cdcedf58e1362121c61242204cb9414a5116061506b5ca5cf98479ad6cb43548663ab02746d82aa59c00b779f78"' :
                                        'id="xs-injectables-links-module-HelperModule-4e69de9f7b5e4b73cefa085d490bf44d8ab65cdcedf58e1362121c61242204cb9414a5116061506b5ca5cf98479ad6cb43548663ab02746d82aa59c00b779f78"' }>
                                        <li class="link">
                                            <a href="injectables/PaginationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaginationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-HomeModule-7e9ba6c420b87332517a988dfcc2691a1a8007fab47d21b671634793b605e4271e710a078e23b0b7ec2e74797776ad4fd923cfef3ec82268d4b0c71af2e958ee"' : 'data-bs-target="#xs-controllers-links-module-HomeModule-7e9ba6c420b87332517a988dfcc2691a1a8007fab47d21b671634793b605e4271e710a078e23b0b7ec2e74797776ad4fd923cfef3ec82268d4b0c71af2e958ee"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HomeModule-7e9ba6c420b87332517a988dfcc2691a1a8007fab47d21b671634793b605e4271e710a078e23b0b7ec2e74797776ad4fd923cfef3ec82268d4b0c71af2e958ee"' :
                                            'id="xs-controllers-links-module-HomeModule-7e9ba6c420b87332517a988dfcc2691a1a8007fab47d21b671634793b605e4271e710a078e23b0b7ec2e74797776ad4fd923cfef3ec82268d4b0c71af2e958ee"' }>
                                            <li class="link">
                                                <a href="controllers/HomeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-HomeModule-7e9ba6c420b87332517a988dfcc2691a1a8007fab47d21b671634793b605e4271e710a078e23b0b7ec2e74797776ad4fd923cfef3ec82268d4b0c71af2e958ee"' : 'data-bs-target="#xs-injectables-links-module-HomeModule-7e9ba6c420b87332517a988dfcc2691a1a8007fab47d21b671634793b605e4271e710a078e23b0b7ec2e74797776ad4fd923cfef3ec82268d4b0c71af2e958ee"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HomeModule-7e9ba6c420b87332517a988dfcc2691a1a8007fab47d21b671634793b605e4271e710a078e23b0b7ec2e74797776ad4fd923cfef3ec82268d4b0c71af2e958ee"' :
                                        'id="xs-injectables-links-module-HomeModule-7e9ba6c420b87332517a988dfcc2691a1a8007fab47d21b671634793b605e4271e710a078e23b0b7ec2e74797776ad4fd923cfef3ec82268d4b0c71af2e958ee"' }>
                                        <li class="link">
                                            <a href="injectables/HomeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StateModule.html" data-type="entity-link" >StateModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-StateModule-5ee9cb9f7cd8685e953b2910d91edf35bfca07b6952987e96b036466ec35bb31bf8b4bb20701aa259bb6c0b57fbc2670bccb5ca45b906781cd7a91ad9743a88b"' : 'data-bs-target="#xs-controllers-links-module-StateModule-5ee9cb9f7cd8685e953b2910d91edf35bfca07b6952987e96b036466ec35bb31bf8b4bb20701aa259bb6c0b57fbc2670bccb5ca45b906781cd7a91ad9743a88b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StateModule-5ee9cb9f7cd8685e953b2910d91edf35bfca07b6952987e96b036466ec35bb31bf8b4bb20701aa259bb6c0b57fbc2670bccb5ca45b906781cd7a91ad9743a88b"' :
                                            'id="xs-controllers-links-module-StateModule-5ee9cb9f7cd8685e953b2910d91edf35bfca07b6952987e96b036466ec35bb31bf8b4bb20701aa259bb6c0b57fbc2670bccb5ca45b906781cd7a91ad9743a88b"' }>
                                            <li class="link">
                                                <a href="controllers/StateController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StateController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-StateModule-5ee9cb9f7cd8685e953b2910d91edf35bfca07b6952987e96b036466ec35bb31bf8b4bb20701aa259bb6c0b57fbc2670bccb5ca45b906781cd7a91ad9743a88b"' : 'data-bs-target="#xs-injectables-links-module-StateModule-5ee9cb9f7cd8685e953b2910d91edf35bfca07b6952987e96b036466ec35bb31bf8b4bb20701aa259bb6c0b57fbc2670bccb5ca45b906781cd7a91ad9743a88b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StateModule-5ee9cb9f7cd8685e953b2910d91edf35bfca07b6952987e96b036466ec35bb31bf8b4bb20701aa259bb6c0b57fbc2670bccb5ca45b906781cd7a91ad9743a88b"' :
                                        'id="xs-injectables-links-module-StateModule-5ee9cb9f7cd8685e953b2910d91edf35bfca07b6952987e96b036466ec35bb31bf8b4bb20701aa259bb6c0b57fbc2670bccb5ca45b906781cd7a91ad9743a88b"' }>
                                        <li class="link">
                                            <a href="injectables/StateService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StateService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
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
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AddressType.html" data-type="entity-link" >AddressType</a>
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
                                <a href="classes/UpdateDto-7.html" data-type="entity-link" >UpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDto-8.html" data-type="entity-link" >UpdateDto</a>
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
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
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
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
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
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
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
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});