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
                    <a href="index.html" data-type="index-link">ndb-core documentation</a>
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
                    <li class="chapter additional">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#additional-pages"'
                            : 'data-target="#xs-additional-pages"' }>
                            <span class="icon ion-ios-book"></span>
                            <span>developer wiki</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                                    <li class="link ">
                                        <a href="additional-documentation/getting-started.html" data-type="entity-link" data-context-id="additional">Getting started</a>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/contribution-guidelines.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-84b1fc995d72ddd094ce74d2df54f10e"' : 'data-target="#xs-additional-page-84b1fc995d72ddd094ce74d2df54f10e"' }>
                                                <span class="link-name">Contribution Guidelines</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-84b1fc995d72ddd094ce74d2df54f10e"' : 'id="xs-additional-page-84b1fc995d72ddd094ce74d2df54f10e"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/contribution-guidelines/documentation.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Documentation</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/contribution-guidelines/logging-errors.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Logging errors</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/contribution-guidelines/unit-tests.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Unit Tests</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/contribution-guidelines/ux-guidelines.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">UX Guidelines</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/contribution-guidelines/creating-new-entity-types.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Creating new Entity types</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/architecture.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-da0bf196a2d0b80f36fc63d621012936"' : 'data-target="#xs-additional-page-da0bf196a2d0b80f36fc63d621012936"' }>
                                                <span class="link-name">Architecture</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-da0bf196a2d0b80f36fc63d621012936"' : 'id="xs-additional-page-da0bf196a2d0b80f36fc63d621012936"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/architecture/entityschema.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">EntitySchema</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/database.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-05a56a547080403b79047d37c3a26872"' : 'data-target="#xs-additional-page-05a56a547080403b79047d37c3a26872"' }>
                                                <span class="link-name">Database</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-05a56a547080403b79047d37c3a26872"' : 'id="xs-additional-page-05a56a547080403b79047d37c3a26872"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/database/demo-data.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Demo Data</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/prerequisites.html" data-type="entity-link" data-context-id="additional">Prerequisites</a>
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
                                <a href="modules/AdminModule.html" data-type="entity-link">AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-39db3a629bfa2366c6398976d70392b3"' : 'data-target="#xs-components-links-module-AdminModule-39db3a629bfa2366c6398976d70392b3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-39db3a629bfa2366c6398976d70392b3"' :
                                            'id="xs-components-links-module-AdminModule-39db3a629bfa2366c6398976d70392b3"' }>
                                            <li class="link">
                                                <a href="components/AdminComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AdminModule-39db3a629bfa2366c6398976d70392b3"' : 'data-target="#xs-injectables-links-module-AdminModule-39db3a629bfa2366c6398976d70392b3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdminModule-39db3a629bfa2366c6398976d70392b3"' :
                                        'id="xs-injectables-links-module-AdminModule-39db3a629bfa2366c6398976d70392b3"' }>
                                        <li class="link">
                                            <a href="injectables/ChildPhotoUpdateService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ChildPhotoUpdateService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AlertsModule.html" data-type="entity-link">AlertsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AlertsModule-8e9b3613b736bb22bfdccb2fb87ccf1a"' : 'data-target="#xs-components-links-module-AlertsModule-8e9b3613b736bb22bfdccb2fb87ccf1a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AlertsModule-8e9b3613b736bb22bfdccb2fb87ccf1a"' :
                                            'id="xs-components-links-module-AlertsModule-8e9b3613b736bb22bfdccb2fb87ccf1a"' }>
                                            <li class="link">
                                                <a href="components/AlertComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AlertComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AlertsModule-8e9b3613b736bb22bfdccb2fb87ccf1a"' : 'data-target="#xs-injectables-links-module-AlertsModule-8e9b3613b736bb22bfdccb2fb87ccf1a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AlertsModule-8e9b3613b736bb22bfdccb2fb87ccf1a"' :
                                        'id="xs-injectables-links-module-AlertsModule-8e9b3613b736bb22bfdccb2fb87ccf1a"' }>
                                        <li class="link">
                                            <a href="injectables/AlertService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AlertService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppConfigModule.html" data-type="entity-link">AppConfigModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppConfigModule-80b0fe12b75e958f4cafb9d357ae2166"' : 'data-target="#xs-injectables-links-module-AppConfigModule-80b0fe12b75e958f4cafb9d357ae2166"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppConfigModule-80b0fe12b75e958f4cafb9d357ae2166"' :
                                        'id="xs-injectables-links-module-AppConfigModule-80b0fe12b75e958f4cafb9d357ae2166"' }>
                                        <li class="link">
                                            <a href="injectables/AppConfig.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AppConfig</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-5722b5cc9ad3c735b104cd161864589a"' : 'data-target="#xs-components-links-module-AppModule-5722b5cc9ad3c735b104cd161864589a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-5722b5cc9ad3c735b104cd161864589a"' :
                                            'id="xs-components-links-module-AppModule-5722b5cc9ad3c735b104cd161864589a"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-5722b5cc9ad3c735b104cd161864589a"' : 'data-target="#xs-injectables-links-module-AppModule-5722b5cc9ad3c735b104cd161864589a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-5722b5cc9ad3c735b104cd161864589a"' :
                                        'id="xs-injectables-links-module-AppModule-5722b5cc9ad3c735b104cd161864589a"' }>
                                        <li class="link">
                                            <a href="injectables/AppConfig.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AppConfig</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChildrenModule.html" data-type="entity-link">ChildrenModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ChildrenModule-587aae47639005508949ad52fd8054de"' : 'data-target="#xs-components-links-module-ChildrenModule-587aae47639005508949ad52fd8054de"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChildrenModule-587aae47639005508949ad52fd8054de"' :
                                            'id="xs-components-links-module-ChildrenModule-587aae47639005508949ad52fd8054de"' }>
                                            <li class="link">
                                                <a href="components/AddDayAttendanceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddDayAttendanceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddMonthAttendanceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddMonthAttendanceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AserComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AttendanceAverageDashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AttendanceAverageDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AttendanceBlockComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AttendanceBlockComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AttendanceDayBlockComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AttendanceDayBlockComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AttendanceDaysComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AttendanceDaysComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AttendanceDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AttendanceDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AttendanceManagerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AttendanceManagerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AttendanceWarningsDashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AttendanceWarningsDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AttendanceWeekDashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AttendanceWeekDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChildAttendanceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChildAttendanceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChildBlockComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChildBlockComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChildDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChildDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChildSelectComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChildSelectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChildrenCountDashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChildrenCountDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChildrenListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChildrenListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditSchoolDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditSchoolDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EducationalMaterialComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EducationalMaterialComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HealthCheckupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HealthCheckupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoteDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NoteDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotesManagerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotesManagerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewSchoolsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ViewSchoolsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ChildrenModule-587aae47639005508949ad52fd8054de"' : 'data-target="#xs-injectables-links-module-ChildrenModule-587aae47639005508949ad52fd8054de"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ChildrenModule-587aae47639005508949ad52fd8054de"' :
                                        'id="xs-injectables-links-module-ChildrenModule-587aae47639005508949ad52fd8054de"' }>
                                        <li class="link">
                                            <a href="injectables/ChildrenService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ChildrenService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link">DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-cd2680d0aa6e8273bc643a2d680c4386"' : 'data-target="#xs-components-links-module-DashboardModule-cd2680d0aa6e8273bc643a2d680c4386"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-cd2680d0aa6e8273bc643a2d680c4386"' :
                                            'id="xs-components-links-module-DashboardModule-cd2680d0aa6e8273bc643a2d680c4386"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProgressDashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProgressDashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link">DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DemoDataModule.html" data-type="entity-link">DemoDataModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DemoDataModule-a20cf1c10aa1788921aa7eb951d7b987"' : 'data-target="#xs-components-links-module-DemoDataModule-a20cf1c10aa1788921aa7eb951d7b987"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DemoDataModule-a20cf1c10aa1788921aa7eb951d7b987"' :
                                            'id="xs-components-links-module-DemoDataModule-a20cf1c10aa1788921aa7eb951d7b987"' }>
                                            <li class="link">
                                                <a href="components/DemoDataGeneratingProgressDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DemoDataGeneratingProgressDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EntityModule.html" data-type="entity-link">EntityModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-EntityModule-09bfbddc6df39766561c85a07e4c0927"' : 'data-target="#xs-injectables-links-module-EntityModule-09bfbddc6df39766561c85a07e4c0927"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EntityModule-09bfbddc6df39766561c85a07e4c0927"' :
                                        'id="xs-injectables-links-module-EntityModule-09bfbddc6df39766561c85a07e4c0927"' }>
                                        <li class="link">
                                            <a href="injectables/EntityMapperService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>EntityMapperService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EntitySchemaService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>EntitySchemaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HelpModule.html" data-type="entity-link">HelpModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HelpModule-3839aa4eada701b7ce62b00276dadc4d"' : 'data-target="#xs-components-links-module-HelpModule-3839aa4eada701b7ce62b00276dadc4d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HelpModule-3839aa4eada701b7ce62b00276dadc4d"' :
                                            'id="xs-components-links-module-HelpModule-3839aa4eada701b7ce62b00276dadc4d"' }>
                                            <li class="link">
                                                <a href="components/HowToComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HowToComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LatestChangesModule.html" data-type="entity-link">LatestChangesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LatestChangesModule-aba4a73b25eb8f9f9ec6e65bc9d3646e"' : 'data-target="#xs-components-links-module-LatestChangesModule-aba4a73b25eb8f9f9ec6e65bc9d3646e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LatestChangesModule-aba4a73b25eb8f9f9ec6e65bc9d3646e"' :
                                            'id="xs-components-links-module-LatestChangesModule-aba4a73b25eb8f9f9ec6e65bc9d3646e"' }>
                                            <li class="link">
                                                <a href="components/AppVersionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppVersionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChangelogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChangelogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LatestChangesModule-aba4a73b25eb8f9f9ec6e65bc9d3646e"' : 'data-target="#xs-injectables-links-module-LatestChangesModule-aba4a73b25eb8f9f9ec6e65bc9d3646e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LatestChangesModule-aba4a73b25eb8f9f9ec6e65bc9d3646e"' :
                                        'id="xs-injectables-links-module-LatestChangesModule-aba4a73b25eb8f9f9ec6e65bc9d3646e"' }>
                                        <li class="link">
                                            <a href="injectables/LatestChangesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LatestChangesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UpdateManagerService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UpdateManagerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoggingModule.html" data-type="entity-link">LoggingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NavigationModule.html" data-type="entity-link">NavigationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NavigationModule-112a6ade6973367a10f07b9b4801a49d"' : 'data-target="#xs-components-links-module-NavigationModule-112a6ade6973367a10f07b9b4801a49d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NavigationModule-112a6ade6973367a10f07b9b4801a49d"' :
                                            'id="xs-components-links-module-NavigationModule-112a6ade6973367a10f07b9b4801a49d"' }>
                                            <li class="link">
                                                <a href="components/NavigationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavigationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-NavigationModule-112a6ade6973367a10f07b9b4801a49d"' : 'data-target="#xs-injectables-links-module-NavigationModule-112a6ade6973367a10f07b9b4801a49d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NavigationModule-112a6ade6973367a10f07b9b4801a49d"' :
                                        'id="xs-injectables-links-module-NavigationModule-112a6ade6973367a10f07b9b4801a49d"' }>
                                        <li class="link">
                                            <a href="injectables/NavigationItemsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>NavigationItemsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SchoolsModule.html" data-type="entity-link">SchoolsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SchoolsModule-79d5654c612f4eb0fd29e6bff7c49671"' : 'data-target="#xs-components-links-module-SchoolsModule-79d5654c612f4eb0fd29e6bff7c49671"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SchoolsModule-79d5654c612f4eb0fd29e6bff7c49671"' :
                                            'id="xs-components-links-module-SchoolsModule-79d5654c612f4eb0fd29e6bff7c49671"' }>
                                            <li class="link">
                                                <a href="components/SchoolBlockComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SchoolBlockComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SchoolDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SchoolDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SchoolsListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SchoolsListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SchoolsModule-79d5654c612f4eb0fd29e6bff7c49671"' : 'data-target="#xs-injectables-links-module-SchoolsModule-79d5654c612f4eb0fd29e6bff7c49671"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SchoolsModule-79d5654c612f4eb0fd29e6bff7c49671"' :
                                        'id="xs-injectables-links-module-SchoolsModule-79d5654c612f4eb0fd29e6bff7c49671"' }>
                                        <li class="link">
                                            <a href="injectables/SchoolsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SchoolsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SessionModule.html" data-type="entity-link">SessionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SessionModule-9d70de0dc2098f6f774899a654b2e30b"' : 'data-target="#xs-components-links-module-SessionModule-9d70de0dc2098f6f774899a654b2e30b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SessionModule-9d70de0dc2098f6f774899a654b2e30b"' :
                                            'id="xs-components-links-module-SessionModule-9d70de0dc2098f6f774899a654b2e30b"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SessionModule-9d70de0dc2098f6f774899a654b2e30b"' : 'data-target="#xs-injectables-links-module-SessionModule-9d70de0dc2098f6f774899a654b2e30b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SessionModule-9d70de0dc2098f6f774899a654b2e30b"' :
                                        'id="xs-injectables-links-module-SessionModule-9d70de0dc2098f6f774899a654b2e30b"' }>
                                        <li class="link">
                                            <a href="injectables/SessionService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SessionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SyncStatusModule.html" data-type="entity-link">SyncStatusModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SyncStatusModule-23c12ab64d8c5c396ddfcd36664b0a3f"' : 'data-target="#xs-components-links-module-SyncStatusModule-23c12ab64d8c5c396ddfcd36664b0a3f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SyncStatusModule-23c12ab64d8c5c396ddfcd36664b0a3f"' :
                                            'id="xs-components-links-module-SyncStatusModule-23c12ab64d8c5c396ddfcd36664b0a3f"' }>
                                            <li class="link">
                                                <a href="components/InitialSyncDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InitialSyncDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SyncStatusComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SyncStatusComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UiHelperModule.html" data-type="entity-link">UiHelperModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiHelperModule-2e8272e5ac349b296128d3a84c642125"' : 'data-target="#xs-components-links-module-UiHelperModule-2e8272e5ac349b296128d3a84c642125"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiHelperModule-2e8272e5ac349b296128d3a84c642125"' :
                                            'id="xs-components-links-module-UiHelperModule-2e8272e5ac349b296128d3a84c642125"' }>
                                            <li class="link">
                                                <a href="components/ConfirmationDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfirmationDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EntitySubrecordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EntitySubrecordComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UiHelperModule-2e8272e5ac349b296128d3a84c642125"' : 'data-target="#xs-injectables-links-module-UiHelperModule-2e8272e5ac349b296128d3a84c642125"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UiHelperModule-2e8272e5ac349b296128d3a84c642125"' :
                                        'id="xs-injectables-links-module-UiHelperModule-2e8272e5ac349b296128d3a84c642125"' }>
                                        <li class="link">
                                            <a href="injectables/ConfirmationDialogService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ConfirmationDialogService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-UiHelperModule-2e8272e5ac349b296128d3a84c642125"' : 'data-target="#xs-pipes-links-module-UiHelperModule-2e8272e5ac349b296128d3a84c642125"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-UiHelperModule-2e8272e5ac349b296128d3a84c642125"' :
                                            'id="xs-pipes-links-module-UiHelperModule-2e8272e5ac349b296128d3a84c642125"' }>
                                            <li class="link">
                                                <a href="pipes/KeysPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">KeysPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link">UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiModule-baed8972bc62d449793bc8736d4a33ae"' : 'data-target="#xs-components-links-module-UiModule-baed8972bc62d449793bc8736d4a33ae"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-baed8972bc62d449793bc8736d4a33ae"' :
                                            'id="xs-components-links-module-UiModule-baed8972bc62d449793bc8736d4a33ae"' }>
                                            <li class="link">
                                                <a href="components/PrimaryActionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrimaryActionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UiComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link">UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-a443e018b84b02a35308951489140886"' : 'data-target="#xs-components-links-module-UserModule-a443e018b84b02a35308951489140886"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-a443e018b84b02a35308951489140886"' :
                                            'id="xs-components-links-module-UserModule-a443e018b84b02a35308951489140886"' }>
                                            <li class="link">
                                                <a href="components/UserAccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserAccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
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
                                <a href="classes/Alert.html" data-type="entity-link">Alert</a>
                            </li>
                            <li class="link">
                                <a href="classes/Aser.html" data-type="entity-link">Aser</a>
                            </li>
                            <li class="link">
                                <a href="classes/AttendanceDay.html" data-type="entity-link">AttendanceDay</a>
                            </li>
                            <li class="link">
                                <a href="classes/AttendanceMonth.html" data-type="entity-link">AttendanceMonth</a>
                            </li>
                            <li class="link">
                                <a href="classes/Changelog.html" data-type="entity-link">Changelog</a>
                            </li>
                            <li class="link">
                                <a href="classes/Child.html" data-type="entity-link">Child</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChildSchoolRelation.html" data-type="entity-link">ChildSchoolRelation</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnDescription.html" data-type="entity-link">ColumnDescription</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomFaker.html" data-type="entity-link">CustomFaker</a>
                            </li>
                            <li class="link">
                                <a href="classes/Database.html" data-type="entity-link">Database</a>
                            </li>
                            <li class="link">
                                <a href="classes/DemoChildConfig.html" data-type="entity-link">DemoChildConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/DemoDataGenerator.html" data-type="entity-link">DemoDataGenerator</a>
                            </li>
                            <li class="link">
                                <a href="classes/DemoDataServiceConfig.html" data-type="entity-link">DemoDataServiceConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/DemoEducationMaterialConfig.html" data-type="entity-link">DemoEducationMaterialConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/DemoNoteConfig.html" data-type="entity-link">DemoNoteConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/DemoSchoolConfig.html" data-type="entity-link">DemoSchoolConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/EducationalMaterial.html" data-type="entity-link">EducationalMaterial</a>
                            </li>
                            <li class="link">
                                <a href="classes/Entity.html" data-type="entity-link">Entity</a>
                            </li>
                            <li class="link">
                                <a href="classes/FilterSelection.html" data-type="entity-link">FilterSelection</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthCheck.html" data-type="entity-link">HealthCheck</a>
                            </li>
                            <li class="link">
                                <a href="classes/MenuItem.html" data-type="entity-link">MenuItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/MockDatabase.html" data-type="entity-link">MockDatabase</a>
                            </li>
                            <li class="link">
                                <a href="classes/Note.html" data-type="entity-link">Note</a>
                            </li>
                            <li class="link">
                                <a href="classes/PouchDatabase.html" data-type="entity-link">PouchDatabase</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProgressDashboardConfig.html" data-type="entity-link">ProgressDashboardConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/School.html" data-type="entity-link">School</a>
                            </li>
                            <li class="link">
                                <a href="classes/SchoolWithRelation.html" data-type="entity-link">SchoolWithRelation</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
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
                                    <a href="injectables/BackupService.html" data-type="entity-link">BackupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabaseManagerService.html" data-type="entity-link">DatabaseManagerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoAserGeneratorService.html" data-type="entity-link">DemoAserGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoAttendanceGenerator.html" data-type="entity-link">DemoAttendanceGenerator</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoChildGenerator.html" data-type="entity-link">DemoChildGenerator</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoChildSchoolRelationGenerator.html" data-type="entity-link">DemoChildSchoolRelationGenerator</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoDataService.html" data-type="entity-link">DemoDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoEducationalMaterialGeneratorService.html" data-type="entity-link">DemoEducationalMaterialGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoHealthCheckGeneratorService.html" data-type="entity-link">DemoHealthCheckGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoNoteGeneratorService.html" data-type="entity-link">DemoNoteGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoSchoolGenerator.html" data-type="entity-link">DemoSchoolGenerator</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoWidgetGeneratorService.html" data-type="entity-link">DemoWidgetGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggingService.html" data-type="entity-link">LoggingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MockDatabaseManagerService.html" data-type="entity-link">MockDatabaseManagerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PouchDatabaseManagerService.html" data-type="entity-link">PouchDatabaseManagerService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AdminGuard.html" data-type="entity-link">AdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/LoggedInGuard.html" data-type="entity-link">LoggedInGuard</a>
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
                                <a href="interfaces/Address.html" data-type="entity-link">Address</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AttendanceProfile.html" data-type="entity-link">AttendanceProfile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Card.html" data-type="entity-link">Card</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ColumnGroup.html" data-type="entity-link">ColumnGroup</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Company.html" data-type="entity-link">Company</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ContextualCard.html" data-type="entity-link">ContextualCard</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EntitySchemaDatatype.html" data-type="entity-link">EntitySchemaDatatype</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EntitySchemaField.html" data-type="entity-link">EntitySchemaField</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FakerStatic.html" data-type="entity-link">FakerStatic</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FullAddress.html" data-type="entity-link">FullAddress</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Geo.html" data-type="entity-link">Geo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAppConfig.html" data-type="entity-link">IAppConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Post.html" data-type="entity-link">Post</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProgressDashboardPart.html" data-type="entity-link">ProgressDashboardPart</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Transaction.html" data-type="entity-link">Transaction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserCard.html" data-type="entity-link">UserCard</a>
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