import angular from 'angular';
import uirouter from 'angular-ui-router';

import routingConfig from 'routing-config';

import MLIComponent from 'components/mli';
import utilsComponent from 'components/utils';
import VocabularyComponent from 'components/vocabulary';

import dashboardModule from 'modules/dashboard';
import VocabularyModule from 'modules/vocabulary';


import '../scss/main.scss';

angular
    .module('LanguageLearner', [
        uirouter,
        MLIComponent,
        utilsComponent,
        VocabularyComponent,
        dashboardModule,
        VocabularyModule
    ])
    .config(routingConfig);
