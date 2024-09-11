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
                                <a href="modules/CountriesModule.html" data-type="entity-link" >CountriesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CountriesModule-0d3fa6df9471a682fae87bf01cb30a188f9af2d8d915d2deedecbe3ffb96500d11302786049bdfffbe4b082e6cd2c3086f1657312e0ed282d0c56ec8b4e26727"' : 'data-bs-target="#xs-controllers-links-module-CountriesModule-0d3fa6df9471a682fae87bf01cb30a188f9af2d8d915d2deedecbe3ffb96500d11302786049bdfffbe4b082e6cd2c3086f1657312e0ed282d0c56ec8b4e26727"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CountriesModule-0d3fa6df9471a682fae87bf01cb30a188f9af2d8d915d2deedecbe3ffb96500d11302786049bdfffbe4b082e6cd2c3086f1657312e0ed282d0c56ec8b4e26727"' :
                                            'id="xs-controllers-links-module-CountriesModule-0d3fa6df9471a682fae87bf01cb30a188f9af2d8d915d2deedecbe3ffb96500d11302786049bdfffbe4b082e6cd2c3086f1657312e0ed282d0c56ec8b4e26727"' }>
                                            <li class="link">
                                                <a href="controllers/CountriesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CountriesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CountriesModule-0d3fa6df9471a682fae87bf01cb30a188f9af2d8d915d2deedecbe3ffb96500d11302786049bdfffbe4b082e6cd2c3086f1657312e0ed282d0c56ec8b4e26727"' : 'data-bs-target="#xs-injectables-links-module-CountriesModule-0d3fa6df9471a682fae87bf01cb30a188f9af2d8d915d2deedecbe3ffb96500d11302786049bdfffbe4b082e6cd2c3086f1657312e0ed282d0c56ec8b4e26727"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CountriesModule-0d3fa6df9471a682fae87bf01cb30a188f9af2d8d915d2deedecbe3ffb96500d11302786049bdfffbe4b082e6cd2c3086f1657312e0ed282d0c56ec8b4e26727"' :
                                        'id="xs-injectables-links-module-CountriesModule-0d3fa6df9471a682fae87bf01cb30a188f9af2d8d915d2deedecbe3ffb96500d11302786049bdfffbe4b082e6cd2c3086f1657312e0ed282d0c56ec8b4e26727"' }>
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
                                        'data-bs-target="#injectables-links-module-HelperModule-ea299ef14bf37da3d03c6d67e136b460d208876d52e7c247fbf6d9fadfd7fd1914bad10129b57891bae2a815c52ea1cd57a8a2848a0a198ff8f92b39687460fd"' : 'data-bs-target="#xs-injectables-links-module-HelperModule-ea299ef14bf37da3d03c6d67e136b460d208876d52e7c247fbf6d9fadfd7fd1914bad10129b57891bae2a815c52ea1cd57a8a2848a0a198ff8f92b39687460fd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HelperModule-ea299ef14bf37da3d03c6d67e136b460d208876d52e7c247fbf6d9fadfd7fd1914bad10129b57891bae2a815c52ea1cd57a8a2848a0a198ff8f92b39687460fd"' :
                                        'id="xs-injectables-links-module-HelperModule-ea299ef14bf37da3d03c6d67e136b460d208876d52e7c247fbf6d9fadfd7fd1914bad10129b57891bae2a815c52ea1cd57a8a2848a0a198ff8f92b39687460fd"' }>
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
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CountriesController.html" data-type="entity-link" >CountriesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CurrenciesController.html" data-type="entity-link" >CurrenciesController</a>
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
                                <a href="classes/AllExceptionsFilter.html" data-type="entity-link" >AllExceptionsFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/BadRequestExceptionFilter.html" data-type="entity-link" >BadRequestExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConfigService.html" data-type="entity-link" >ConfigService</a>
                            </li>
                            <li class="link">
                                <a href="classes/Country.html" data-type="entity-link" >Country</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDto.html" data-type="entity-link" >CreateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Currency.html" data-type="entity-link" >Currency</a>
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
                                <a href="classes/UpdateDto.html" data-type="entity-link" >UpdateDto</a>
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
                                    <a href="injectables/CommaSeparated.html" data-type="entity-link" >CommaSeparated</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CountriesService.html" data-type="entity-link" >CountriesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CurrenciesService.html" data-type="entity-link" >CurrenciesService</a>
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