import forEach from 'lodash/collection/forEach';
import camelCase from 'lodash/string/camelCase';

import { Reactor } from 'nuclear-js';
import { provideReactor, nuclearComponent } from 'nuclear-js-react-addons';
import ErrorHandler from './error-handler';

let registeredModulesCount = 0;
let currentModule = null;
let currentModuleName = null;

class Context extends Reactor {
  constructor(options) {
    super(options);

    this.modules = {};
    this.provider = provideReactor;
    this.connector = nuclearComponent;
  }

  create(modules) {
    forEach(modules, (module) => {
      currentModule = module;
      currentModuleName = camelCase(
        module.constructor.displayName || module.constructor.name
      );

      ErrorHandler.fatal(
        !currentModule.register,
        'Each module should expose a `register` method.'
      );

      currentModule.register(this);

      this.modules[currentModuleName] = {};
      this.registerGetters();
      this.registerActions();
    }, this);

    registeredModulesCount++;
    currentModuleName = null;
    currentModule = null;
  }

  registerActions() {
    if (currentModule && currentModule.actions) {
      this.modules[currentModuleName].actions = currentModule.actions;
    }
  }

  registerGetters() {
    if (currentModule && currentModule.getters) {
      this.modules[currentModuleName].getters = currentModule.getters;
    }
  }

  inject(stores) {
    ErrorHandler.fatal(
      !registeredModulesCount,
      `Did you created your application context? Use Context#create() to expose and initialize all of your modules.`
    );

    this.loadState(stores);
  }
}

export default Context;
