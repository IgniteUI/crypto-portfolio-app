(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/zone.js/dist/zone.js":
/*!*******************************************!*\
  !*** ./node_modules/zone.js/dist/zone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
(function (global, factory) {
	 true ? factory() :
	undefined;
}(this, (function () { 'use strict';

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Zone$1 = (function (global) {
    var FUNCTION = 'function';
    var performance = global['performance'];
    function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
    }
    function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
    }
    mark('Zone');
    if (global['Zone']) {
        throw new Error('Zone already loaded.');
    }
    var Zone = /** @class */ (function () {
        function Zone(parent, zoneSpec) {
            this._properties = null;
            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate =
                new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }
        Zone.assertZonePatched = function () {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                    'has been overwritten.\n' +
                    'Most likely cause is that a Promise polyfill has been loaded ' +
                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                    'If you must load one, do so before loading zone.js.)');
            }
        };
        Object.defineProperty(Zone, "root", {
            get: function () {
                var zone = Zone.current;
                while (zone.parent) {
                    zone = zone.parent;
                }
                return zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "current", {
            get: function () {
                return _currentZoneFrame.zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "currentTask", {
            get: function () {
                return _currentTask;
            },
            enumerable: true,
            configurable: true
        });
        Zone.__load_patch = function (name, fn) {
            if (patches.hasOwnProperty(name)) {
                throw Error('Already loaded patch: ' + name);
            }
            else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
            }
        };
        Object.defineProperty(Zone.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Zone.prototype.get = function (key) {
            var zone = this.getZoneWith(key);
            if (zone)
                return zone._properties[key];
        };
        Zone.prototype.getZoneWith = function (key) {
            var current = this;
            while (current) {
                if (current._properties.hasOwnProperty(key)) {
                    return current;
                }
                current = current._parent;
            }
            return null;
        };
        Zone.prototype.fork = function (zoneSpec) {
            if (!zoneSpec)
                throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
        };
        Zone.prototype.wrap = function (callback, source) {
            if (typeof callback !== FUNCTION) {
                throw new Error('Expecting function got: ' + callback);
            }
            var _callback = this._zoneDelegate.intercept(this, callback, source);
            var zone = this;
            return function () {
                return zone.runGuarded(_callback, this, arguments, source);
            };
        };
        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = undefined; }
            if (applyArgs === void 0) { applyArgs = null; }
            if (source === void 0) { source = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = null; }
            if (applyArgs === void 0) { applyArgs = null; }
            if (source === void 0) { source = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
            if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            }
            // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return
            // we have to define an variable here, if not
            // typescript compiler will complain below
            var isNotScheduled = task.state === notScheduled;
            if (isNotScheduled && task.type === eventTask) {
                return;
            }
            var reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            var previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                    task.cancelFn = null;
                }
                try {
                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                    if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                        reEntryGuard && task._transitionTo(scheduled, running);
                    }
                    else {
                        task.runCount = 0;
                        this._updateTaskCount(task, -1);
                        reEntryGuard &&
                            task._transitionTo(notScheduled, running, notScheduled);
                    }
                }
                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
            }
        };
        Zone.prototype.scheduleTask = function (task) {
            if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;
                while (newZone) {
                    if (newZone === task.zone) {
                        throw Error("can not reschedule task to " + this
                            .name + " which is descendants of the original zone " + task.zone.name);
                    }
                    newZone = newZone.parent;
                }
            }
            task._transitionTo(scheduling, notScheduled);
            var zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;
            try {
                task = this._zoneDelegate.scheduleTask(this, task);
            }
            catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled);
                // TODO: @JiaLiPassion, should we check the result from handleError?
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
            }
            if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
            }
            return task;
        };
        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, null));
        };
        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.cancelTask = function (task) {
            if (task.zone != this)
                throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            task._transitionTo(canceling, scheduled, running);
            try {
                this._zoneDelegate.cancelTask(this, task);
            }
            catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            this._updateTaskCount(task, -1);
            task._transitionTo(notScheduled, canceling);
            task.runCount = 0;
            return task;
        };
        Zone.prototype._updateTaskCount = function (task, count) {
            var zoneDelegates = task._zoneDelegates;
            if (count == -1) {
                task._zoneDelegates = null;
            }
            for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
            }
        };
        Zone.__symbol__ = __symbol__;
        return Zone;
    }());
    var DELEGATE_ZS = {
        name: '',
        onHasTask: function (delegate, _, target, hasTaskState) {
            return delegate.hasTask(target, hasTaskState);
        },
        onScheduleTask: function (delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
        },
        onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) { return delegate.invokeTask(target, task, applyThis, applyArgs); },
        onCancelTask: function (delegate, _, target, task) {
            return delegate.cancelTask(target, task);
        }
    };
    var ZoneDelegate = /** @class */ (function () {
        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
            this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
            this._interceptZS =
                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt =
                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone =
                zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt =
                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
            this._handleErrorZS =
                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt =
                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone =
                zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
            this._scheduleTaskZS =
                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt =
                zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone =
                zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
            this._invokeTaskZS =
                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt =
                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone =
                zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
            this._cancelTaskZS =
                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt =
                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone =
                zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
            if (zoneSpecHasTask || parentHasTask) {
                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                // a case all task related interceptors must go through this ZD. We can't short circuit it.
                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                this._hasTaskDlgt = parentDelegate;
                this._hasTaskDlgtOwner = this;
                this._hasTaskCurrZone = zone;
                if (!zoneSpec.onScheduleTask) {
                    this._scheduleTaskZS = DELEGATE_ZS;
                    this._scheduleTaskDlgt = parentDelegate;
                    this._scheduleTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onInvokeTask) {
                    this._invokeTaskZS = DELEGATE_ZS;
                    this._invokeTaskDlgt = parentDelegate;
                    this._invokeTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onCancelTask) {
                    this._cancelTaskZS = DELEGATE_ZS;
                    this._cancelTaskDlgt = parentDelegate;
                    this._cancelTaskCurrZone = this.zone;
                }
            }
        }
        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                new Zone(targetZone, zoneSpec);
        };
        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
            return this._interceptZS ?
                this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                callback;
        };
        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ?
                this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.handleError = function (targetZone, error) {
            return this._handleErrorZS ?
                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                true;
        };
        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
            var returnTask = task;
            if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                    returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                }
                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                if (!returnTask)
                    returnTask = task;
            }
            else {
                if (task.scheduleFn) {
                    task.scheduleFn(task);
                }
                else if (task.type == microTask) {
                    scheduleMicroTask(task);
                }
                else {
                    throw new Error('Task is missing scheduleFn.');
                }
            }
            return returnTask;
        };
        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ?
                this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                task.callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
            var value;
            if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            }
            else {
                if (!task.cancelFn) {
                    throw Error('Task is not cancelable');
                }
                value = task.cancelFn(task);
            }
            return value;
        };
        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
                return this._hasTaskZS &&
                    this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            }
            catch (err) {
                this.handleError(targetZone, err);
            }
        };
        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
            var counts = this._taskCounts;
            var prev = counts[type];
            var next = counts[type] = prev + count;
            if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
            }
            if (prev == 0 || next == 0) {
                var isEmpty = {
                    microTask: counts['microTask'] > 0,
                    macroTask: counts['macroTask'] > 0,
                    eventTask: counts['eventTask'] > 0,
                    change: type
                };
                this.hasTask(this.zone, isEmpty);
            }
        };
        return ZoneDelegate;
    }());
    var ZoneTask = /** @class */ (function () {
        function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            this._zone = null;
            this.runCount = 0;
            this._zoneDelegates = null;
            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;
            this.callback = callback;
            var self = this;
            // TODO: @JiaLiPassion options should have interface
            if (type === eventTask && options && options.useG) {
                this.invoke = ZoneTask.invokeTask;
            }
            else {
                this.invoke = function () {
                    return ZoneTask.invokeTask.call(global, self, this, arguments);
                };
            }
        }
        ZoneTask.invokeTask = function (task, target, args) {
            if (!task) {
                task = this;
            }
            _numberOfNestedTaskFrames++;
            try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
            }
            finally {
                if (_numberOfNestedTaskFrames == 1) {
                    drainMicroTaskQueue();
                }
                _numberOfNestedTaskFrames--;
            }
        };
        Object.defineProperty(ZoneTask.prototype, "zone", {
            get: function () {
                return this._zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ZoneTask.prototype, "state", {
            get: function () {
                return this._state;
            },
            enumerable: true,
            configurable: true
        });
        ZoneTask.prototype.cancelScheduleRequest = function () {
            this._transitionTo(notScheduled, scheduling);
        };
        ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;
                if (toState == notScheduled) {
                    this._zoneDelegates = null;
                }
            }
            else {
                throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ?
                    ' or \'' + fromState2 + '\'' :
                    '') + ", was '" + this._state + "'.");
            }
        };
        ZoneTask.prototype.toString = function () {
            if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId;
            }
            else {
                return Object.prototype.toString.call(this);
            }
        };
        // add toJSON method to prevent cyclic error when
        // call JSON.stringify(zoneTask)
        ZoneTask.prototype.toJSON = function () {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            };
        };
        return ZoneTask;
    }());
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var symbolSetTimeout = __symbol__('setTimeout');
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var _microTaskQueue = [];
    var _isDrainingMicrotaskQueue = false;
    var nativeMicroTaskQueuePromise;
    function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
                if (global[symbolPromise]) {
                    nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                }
            }
            if (nativeMicroTaskQueuePromise) {
                nativeMicroTaskQueuePromise[symbolThen](drainMicroTaskQueue);
            }
            else {
                global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
        }
        task && _microTaskQueue.push(task);
    }
    function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;
            while (_microTaskQueue.length) {
                var queue = _microTaskQueue;
                _microTaskQueue = [];
                for (var i = 0; i < queue.length; i++) {
                    var task = queue[i];
                    try {
                        task.zone.runTask(task, null, null);
                    }
                    catch (error) {
                        _api.onUnhandledError(error);
                    }
                }
            }
            _api.microtaskDrainDone();
            _isDrainingMicrotaskQueue = false;
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var NO_ZONE = { name: 'NO ZONE' };
    var notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
    var microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
    var patches = {};
    var _api = {
        symbol: __symbol__,
        currentZoneFrame: function () { return _currentZoneFrame; },
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: function () { return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')]; },
        patchEventTarget: function () { return []; },
        patchOnProperties: noop,
        patchMethod: function () { return noop; },
        bindArguments: function () { return null; },
        setNativePromise: function (NativePromise) {
            // sometimes NativePromise.resolve static function
            // is not ready yet, (such as core-js/es6.promise)
            // so we need to check here.
            if (NativePromise && typeof NativePromise.resolve === FUNCTION) {
                nativeMicroTaskQueuePromise = NativePromise.resolve(0);
            }
        },
    };
    var _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
    var _currentTask = null;
    var _numberOfNestedTaskFrames = 0;
    function noop() { }
    function __symbol__(name) {
        return '__zone_symbol__' + name;
    }
    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ObjectDefineProperty = Object.defineProperty;
    function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
            var className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
        }
        return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    var __symbol__ = api.symbol;
    var _uncaughtPromiseErrors = [];
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var creationTrace = '__creationTrace__';
    api.onUnhandledError = function (e) {
        if (api.showUncaughtError()) {
            var rejection = e && e.rejection;
            if (rejection) {
                console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            }
            else {
                console.error(e);
            }
        }
    };
    api.microtaskDrainDone = function () {
        while (_uncaughtPromiseErrors.length) {
            var _loop_1 = function () {
                var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                try {
                    uncaughtPromiseError.zone.runGuarded(function () {
                        throw uncaughtPromiseError;
                    });
                }
                catch (error) {
                    handleUnhandledRejection(error);
                }
            };
            while (_uncaughtPromiseErrors.length) {
                _loop_1();
            }
        }
    };
    var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
    function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
            if (handler && typeof handler === 'function') {
                handler.call(this, e);
            }
        }
        catch (err) {
        }
    }
    function isThenable(value) {
        return value && value.then;
    }
    function forwardResolution(value) {
        return value;
    }
    function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
    }
    var symbolState = __symbol__('state');
    var symbolValue = __symbol__('value');
    var symbolFinally = __symbol__('finally');
    var symbolParentPromiseValue = __symbol__('parentPromiseValue');
    var symbolParentPromiseState = __symbol__('parentPromiseState');
    var source = 'Promise.then';
    var UNRESOLVED = null;
    var RESOLVED = true;
    var REJECTED = false;
    var REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
        return function (v) {
            try {
                resolvePromise(promise, state, v);
            }
            catch (err) {
                resolvePromise(promise, false, err);
            }
            // Do not return value or you will break the Promise spec.
        };
    }
    var once = function () {
        var wasCalled = false;
        return function wrapper(wrappedFunction) {
            return function () {
                if (wasCalled) {
                    return;
                }
                wasCalled = true;
                wrappedFunction.apply(null, arguments);
            };
        };
    };
    var TYPE_ERROR = 'Promise resolved with itself';
    var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
    // Promise Resolution
    function resolvePromise(promise, state, value) {
        var onceWrapper = once();
        if (promise === value) {
            throw new TypeError(TYPE_ERROR);
        }
        if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;
            try {
                if (typeof value === 'object' || typeof value === 'function') {
                    then = value && value.then;
                }
            }
            catch (err) {
                onceWrapper(function () {
                    resolvePromise(promise, false, err);
                })();
                return promise;
            }
            // if (value instanceof ZoneAwarePromise) {
            if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
            }
            else if (state !== REJECTED && typeof then === 'function') {
                try {
                    then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                }
                catch (err) {
                    onceWrapper(function () {
                        resolvePromise(promise, false, err);
                    })();
                }
            }
            else {
                promise[symbolState] = state;
                var queue = promise[symbolValue];
                promise[symbolValue] = value;
                if (promise[symbolFinally] === symbolFinally) {
                    // the promise is generated by Promise.prototype.finally          
                    if (state === RESOLVED) {
                        // the state is resolved, should ignore the value
                        // and use parent promise value
                        promise[symbolState] = promise[symbolParentPromiseState];
                        promise[symbolValue] = promise[symbolParentPromiseValue];
                    }
                }
                // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace
                if (state === REJECTED && value instanceof Error) {
                    // check if longStackTraceZone is here
                    var trace = Zone.currentTask && Zone.currentTask.data &&
                        Zone.currentTask.data[creationTrace];
                    if (trace) {
                        // only keep the long stack trace into error when in longStackTraceZone
                        ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                    }
                }
                for (var i = 0; i < queue.length;) {
                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                }
                if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;
                    try {
                        // try to print more readable error log
                        throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                            (value && value.stack ? '\n' + value.stack : ''));
                    }
                    catch (err) {
                        var error_1 = err;
                        error_1.rejection = value;
                        error_1.promise = promise;
                        error_1.zone = Zone.current;
                        error_1.task = Zone.currentTask;
                        _uncaughtPromiseErrors.push(error_1);
                        api.scheduleMicroTask(); // to make sure that it is running
                    }
                }
            }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
    }
    var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
    function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
                var handler = Zone[REJECTION_HANDLED_HANDLER];
                if (handler && typeof handler === 'function') {
                    handler.call(this, { rejection: promise[symbolValue], promise: promise });
                }
            }
            catch (err) {
            }
            promise[symbolState] = REJECTED;
            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                if (promise === _uncaughtPromiseErrors[i].promise) {
                    _uncaughtPromiseErrors.splice(i, 1);
                }
            }
        }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        var promiseState = promise[symbolState];
        var delegate = promiseState ?
            (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
            (typeof onRejected === 'function') ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, function () {
            try {
                var parentPromiseValue = promise[symbolValue];
                var isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];
                if (isFinallyPromise) {
                    // if the promise is generated from finally call, keep parent promise's state and value
                    chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                    chainPromise[symbolParentPromiseState] = promiseState;
                }
                // should not pass value to finally callback
                var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
                resolvePromise(chainPromise, true, value);
            }
            catch (error) {
                // if error occurs, should always return this error
                resolvePromise(chainPromise, false, error);
            }
        }, chainPromise);
    }
    var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
    var ZoneAwarePromise = /** @class */ (function () {
        function ZoneAwarePromise(executor) {
            var promise = this;
            if (!(promise instanceof ZoneAwarePromise)) {
                throw new Error('Must be an instanceof Promise.');
            }
            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;
            try {
                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            }
            catch (error) {
                resolvePromise(promise, false, error);
            }
        }
        ZoneAwarePromise.toString = function () {
            return ZONE_AWARE_PROMISE_TO_STRING;
        };
        ZoneAwarePromise.resolve = function (value) {
            return resolvePromise(new this(null), RESOLVED, value);
        };
        ZoneAwarePromise.reject = function (error) {
            return resolvePromise(new this(null), REJECTED, error);
        };
        ZoneAwarePromise.race = function (values) {
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            function onResolve(value) {
                promise && (promise = null || resolve(value));
            }
            function onReject(error) {
                promise && (promise = null || reject(error));
            }
            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                var value = values_1[_i];
                if (!isThenable(value)) {
                    value = this.resolve(value);
                }
                value.then(onResolve, onReject);
            }
            return promise;
        };
        ZoneAwarePromise.all = function (values) {
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            var count = 0;
            var resolvedValues = [];
            for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
                var value = values_2[_i];
                if (!isThenable(value)) {
                    value = this.resolve(value);
                }
                value.then((function (index) { return function (value) {
                    resolvedValues[index] = value;
                    count--;
                    if (!count) {
                        resolve(resolvedValues);
                    }
                }; })(count), reject);
                count++;
            }
            if (!count)
                resolve(resolvedValues);
            return promise;
        };
        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
            var chainPromise = new this.constructor(null);
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }
            return chainPromise;
        };
        ZoneAwarePromise.prototype.catch = function (onRejected) {
            return this.then(null, onRejected);
        };
        ZoneAwarePromise.prototype.finally = function (onFinally) {
            var chainPromise = new this.constructor(null);
            chainPromise[symbolFinally] = symbolFinally;
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }
            return chainPromise;
        };
        return ZoneAwarePromise;
    }());
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    var NativePromise = global[symbolPromise] = global['Promise'];
    var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');
    var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');
    if (!desc || desc.configurable) {
        desc && delete desc.writable;
        desc && delete desc.value;
        if (!desc) {
            desc = { configurable: true, enumerable: true };
        }
        desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
        };
        desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
                // if the NewNativePromise is ZoneAwarePromise
                // save to global
                global[ZONE_AWARE_PROMISE] = NewNativePromise;
            }
            else {
                // if the NewNativePromise is not ZoneAwarePromise
                // for example: after load zone.js, some library just
                // set es6-promise to global, if we set it to global
                // directly, assertZonePatched will fail and angular
                // will not loaded, so we just set the NewNativePromise
                // to global[symbolPromise], so the result is just like
                // we load ES6 Promise before zone.js
                global[symbolPromise] = NewNativePromise;
                if (!NewNativePromise.prototype[symbolThen]) {
                    patchThen(NewNativePromise);
                }
                api.setNativePromise(NewNativePromise);
            }
        };
        ObjectDefineProperty(global, 'Promise', desc);
    }
    global['Promise'] = ZoneAwarePromise;
    var symbolThenPatched = __symbol__('thenPatched');
    function patchThen(Ctor) {
        var proto = Ctor.prototype;
        var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
        if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
        }
        var originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        Ctor.prototype.then = function (onResolve, onReject) {
            var _this = this;
            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
                originalThen.call(_this, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
    }
    function zoneify(fn) {
        return function () {
            var resultPromise = fn.apply(this, arguments);
            if (resultPromise instanceof ZoneAwarePromise) {
                return resultPromise;
            }
            var ctor = resultPromise.constructor;
            if (!ctor[symbolThenPatched]) {
                patchThen(ctor);
            }
            return resultPromise;
        };
    }
    if (NativePromise) {
        patchThen(NativePromise);
        var fetch_1 = global['fetch'];
        if (typeof fetch_1 == 'function') {
            global['fetch'] = zoneify(fetch_1);
        }
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
var ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
var ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
var ObjectCreate = Object.create;
/** Array.prototype.slice */
var ArraySlice = Array.prototype.slice;
/** addEventListener string const */
var ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
var TRUE_STR = 'true';
/** false string const */
var FALSE_STR = 'false';
/** __zone_symbol__ string const */
var ZONE_SYMBOL_PREFIX = '__zone_symbol__';
function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
var zoneSymbol = Zone.__symbol__;
var isWindowExists = typeof window !== 'undefined';
var internalWindow = isWindowExists ? window : undefined;
var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
var REMOVE_ATTRIBUTE = 'removeAttribute';
var NULL_ON_PROP_VALUE = [null];
function bindArguments(args, source) {
    for (var i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
        }
    }
    return args;
}
function patchPrototype(prototype, fnNames) {
    var source = prototype.constructor['name'];
    var _loop_1 = function (i) {
        var name_1 = fnNames[i];
        var delegate = prototype[name_1];
        if (delegate) {
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name_1);
            if (!isPropertyWritable(prototypeDesc)) {
                return "continue";
            }
            prototype[name_1] = (function (delegate) {
                var patched = function () {
                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
                };
                attachOriginToPatched(patched, delegate);
                return patched;
            })(delegate);
        }
    };
    for (var i = 0; i < fnNames.length; i++) {
        _loop_1(i);
    }
}
function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
        return true;
    }
    if (propertyDesc.writable === false) {
        return false;
    }
    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]');
var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isMix = typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
    !!(isWindowExists && internalWindow['HTMLElement']);
var zoneSymbolEventNames = {};
var wrapFn = function (event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
        return;
    }
    var eventNameSymbol = zoneSymbolEventNames[event.type];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
    }
    var target = this || event.target || _global;
    var listener = target[eventNameSymbol];
    var result = listener && listener.apply(this, arguments);
    if (result != undefined && !result) {
        event.preventDefault();
    }
    return result;
};
function patchProperty(obj, prop, prototype) {
    var desc = ObjectGetOwnPropertyDescriptor(obj, prop);
    if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
        if (prototypeDesc) {
            desc = { enumerable: true, configurable: true };
        }
    }
    // if the descriptor not exists or is not configurable
    // just return
    if (!desc || !desc.configurable) {
        return;
    }
    // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified
    delete desc.writable;
    delete desc.value;
    var originalDescGet = desc.get;
    var originalDescSet = desc.set;
    // substr(2) cuz 'onclick' -> 'click', etc
    var eventName = prop.substr(2);
    var eventNameSymbol = zoneSymbolEventNames[eventName];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
    }
    desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return;
        }
        var previousValue = target[eventNameSymbol];
        if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
        }
        // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet
        if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
        }
        if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
        }
        else {
            target[eventNameSymbol] = null;
        }
    };
    // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null
    desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return null;
        }
        var listener = target[eventNameSymbol];
        if (listener) {
            return listener;
        }
        else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet && originalDescGet.call(this);
            if (value) {
                desc.set.call(this, value);
                if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                    target.removeAttribute(prop);
                }
                return value;
            }
        }
        return null;
    };
    ObjectDefineProperty(obj, prop, desc);
}
function patchOnProperties(obj, properties, prototype) {
    if (properties) {
        for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
        }
    }
    else {
        var onProperties = [];
        for (var prop in obj) {
            if (prop.substr(0, 2) == 'on') {
                onProperties.push(prop);
            }
        }
        for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
        }
    }
}
var originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
    var OriginalClass = _global[className];
    if (!OriginalClass)
        return;
    // keep original class in global
    _global[zoneSymbol(className)] = OriginalClass;
    _global[className] = function () {
        var a = bindArguments(arguments, className);
        switch (a.length) {
            case 0:
                this[originalInstanceKey] = new OriginalClass();
                break;
            case 1:
                this[originalInstanceKey] = new OriginalClass(a[0]);
                break;
            case 2:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                break;
            case 3:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                break;
            case 4:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                break;
            default:
                throw new Error('Arg list too long.');
        }
    };
    // attach original delegate to patched function
    attachOriginToPatched(_global[className], OriginalClass);
    var instance = new OriginalClass(function () { });
    var prop;
    for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
            continue;
        (function (prop) {
            if (typeof instance[prop] === 'function') {
                _global[className].prototype[prop] = function () {
                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                };
            }
            else {
                ObjectDefineProperty(_global[className].prototype, prop, {
                    set: function (fn) {
                        if (typeof fn === 'function') {
                            this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                            // keep callback in wrapped function so we can
                            // use it in Function.prototype.toString to return
                            // the native one.
                            attachOriginToPatched(this[originalInstanceKey][prop], fn);
                        }
                        else {
                            this[originalInstanceKey][prop] = fn;
                        }
                    },
                    get: function () {
                        return this[originalInstanceKey][prop];
                    }
                });
            }
        }(prop));
    }
    for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
        }
    }
}
function patchMethod(target, name, patchFn) {
    var proto = target;
    while (proto && !proto.hasOwnProperty(name)) {
        proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
    }
    var delegateName = zoneSymbol(name);
    var delegate;
    if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name];
        // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
        var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
        if (isPropertyWritable(desc)) {
            var patchDelegate_1 = patchFn(delegate, delegateName, name);
            proto[name] = function () {
                return patchDelegate_1(this, arguments);
            };
            attachOriginToPatched(proto[name], delegate);
        }
    }
    return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
    var setNative = null;
    function scheduleTask(task) {
        var data = task.data;
        data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
        };
        setNative.apply(data.target, data.args);
        return task;
    }
    setNative = patchMethod(obj, funcName, function (delegate) { return function (self, args) {
        var meta = metaCreator(self, args);
        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask, null);
        }
        else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
        }
    }; });
}

function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
}
var isDetectedIEOrEdge = false;
var ieOrEdge = false;
function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
        return ieOrEdge;
    }
    isDetectedIEOrEdge = true;
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
        }
        return ieOrEdge;
    }
    catch (error) {
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', function (global) {
    // patch Func.prototype.toString to let them look like native
    var originalFunctionToString = Function.prototype.toString;
    var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
    var PROMISE_SYMBOL = zoneSymbol('Promise');
    var ERROR_SYMBOL = zoneSymbol('Error');
    var newFunctionToString = function toString() {
        if (typeof this === 'function') {
            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
            if (originalDelegate) {
                if (typeof originalDelegate === 'function') {
                    return originalFunctionToString.apply(this[ORIGINAL_DELEGATE_SYMBOL], arguments);
                }
                else {
                    return Object.prototype.toString.call(originalDelegate);
                }
            }
            if (this === Promise) {
                var nativePromise = global[PROMISE_SYMBOL];
                if (nativePromise) {
                    return originalFunctionToString.apply(nativePromise, arguments);
                }
            }
            if (this === Error) {
                var nativeError = global[ERROR_SYMBOL];
                if (nativeError) {
                    return originalFunctionToString.apply(nativeError, arguments);
                }
            }
        }
        return originalFunctionToString.apply(this, arguments);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    // patch Object.prototype.toString to let them look like native
    var originalObjectToString = Object.prototype.toString;
    var PROMISE_OBJECT_TO_STRING = '[object Promise]';
    Object.prototype.toString = function () {
        if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
        }
        return originalObjectToString.apply(this, arguments);
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
// an identifier to tell ZoneTask do not create a new invoke closure
var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
};
var zoneSymbolEventNames$1 = {};
var globalSources = {};
var EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
var IMMEDIATE_PROPAGATION_SYMBOL = ('__zone_symbol__propagationStopped');
function patchEventTarget(_global, apis, patchOptions) {
    var ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
    var REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
    var LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
    var REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
    var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    var PREPEND_EVENT_LISTENER = 'prependListener';
    var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
    var invokeTask = function (task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
            return;
        }
        var delegate = task.callback;
        if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) { return delegate.handleEvent(event); };
            task.originalDelegate = delegate;
        }
        // invoke static task.invoke
        task.invoke(task, target, [event]);
        var options = task.options;
        if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
            target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = false
    var globalZoneAwareCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = true
    var globalZoneAwareCaptureCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
            return false;
        }
        var useGlobalCallback = true;
        if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
        }
        var validateHandler = patchOptions && patchOptions.vh;
        var checkDuplicate = true;
        if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
        }
        var returnTarget = false;
        if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
        }
        var proto = obj;
        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
        }
        if (!proto) {
            return false;
        }
        if (proto[zoneSymbolAddEventListener]) {
            return false;
        }
        // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data
        var taskData = {};
        var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
            proto[REMOVE_EVENT_LISTENER];
        var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
            proto[LISTENERS_EVENT_LISTENER];
        var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        var nativePrependEventListener;
        if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                proto[patchOptions.prepend];
        }
        var customScheduleGlobal = function () {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
                return;
            }
            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };
        var customCancelGlobal = function (task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
                var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                var symbolEventName = void 0;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = symbolEventName && task.target[symbolEventName];
                if (existingTasks) {
                    for (var i = 0; i < existingTasks.length; i++) {
                        var existingTask = existingTasks[i];
                        if (existingTask === task) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            task.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                task.allRemoved = true;
                                task.target[symbolEventName] = null;
                            }
                            break;
                        }
                    }
                }
            }
            // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return
            if (!task.allRemoved) {
                return;
            }
            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };
        var customScheduleNonGlobal = function (task) {
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customSchedulePrepend = function (task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customCancelNonGlobal = function (task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };
        var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
        var compareTaskCallbackVsDelegate = function (task, delegate) {
            var typeOfDelegate = typeof delegate;
            return (typeOfDelegate === 'function' && task.callback === delegate) ||
                (typeOfDelegate === 'object' && task.originalDelegate === delegate);
        };
        var compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
        var blackListedEvents = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];
        var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
            if (returnTarget === void 0) { returnTarget = false; }
            if (prepend === void 0) { prepend = false; }
            return function () {
                var target = this || _global;
                var delegate = arguments[1];
                if (!delegate) {
                    return nativeListener.apply(this, arguments);
                }
                // don't create the bind delegate function for handleEvent
                // case here to improve addEventListener performance
                // we will create the bind delegate when invoke
                var isHandleEvent = false;
                if (typeof delegate !== 'function') {
                    if (!delegate.handleEvent) {
                        return nativeListener.apply(this, arguments);
                    }
                    isHandleEvent = true;
                }
                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                    return;
                }
                var eventName = arguments[0];
                var options = arguments[2];
                if (blackListedEvents) {
                    // check black list
                    for (var i = 0; i < blackListedEvents.length; i++) {
                        if (eventName === blackListedEvents[i]) {
                            return nativeListener.apply(this, arguments);
                        }
                    }
                }
                var capture;
                var once = false;
                if (options === undefined) {
                    capture = false;
                }
                else if (options === true) {
                    capture = true;
                }
                else if (options === false) {
                    capture = false;
                }
                else {
                    capture = options ? !!options.capture : false;
                    once = options ? !!options.once : false;
                }
                var zone = Zone.current;
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                var symbolEventName;
                if (!symbolEventNames) {
                    // the code is duplicate, but I just want to get some better performance
                    var falseEventName = eventName + FALSE_STR;
                    var trueEventName = eventName + TRUE_STR;
                    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                    zoneSymbolEventNames$1[eventName] = {};
                    zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
                    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
                    symbolEventName = capture ? symbolCapture : symbol;
                }
                else {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = target[symbolEventName];
                var isExisting = false;
                if (existingTasks) {
                    // already have task registered
                    isExisting = true;
                    if (checkDuplicate) {
                        for (var i = 0; i < existingTasks.length; i++) {
                            if (compare(existingTasks[i], delegate)) {
                                // same callback, same capture, same event name, just return
                                return;
                            }
                        }
                    }
                }
                else {
                    existingTasks = target[symbolEventName] = [];
                }
                var source;
                var constructorName = target.constructor['name'];
                var targetSource = globalSources[constructorName];
                if (targetSource) {
                    source = targetSource[eventName];
                }
                if (!source) {
                    source = constructorName + addSource + eventName;
                }
                // do not create a new object as task.data to pass those things
                // just use the global shared one
                taskData.options = options;
                if (once) {
                    // if addEventListener with once options, we don't pass it to
                    // native addEventListener, instead we keep the once setting
                    // and handle ourselves.
                    taskData.options.once = false;
                }
                taskData.target = target;
                taskData.capture = capture;
                taskData.eventName = eventName;
                taskData.isExisting = isExisting;
                var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : null;
                // keep taskData into data to allow onScheduleEventTask to access the task information
                if (data) {
                    data.taskData = taskData;
                }
                var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                // should clear taskData.target to avoid memory leak
                // issue, https://github.com/angular/angular/issues/20442
                taskData.target = null;
                // need to clear up taskData because it is a global object
                if (data) {
                    data.taskData = null;
                }
                // have to save those information to task in case
                // application may call task.zone.cancelTask() directly
                if (once) {
                    options.once = true;
                }
                task.options = options;
                task.target = target;
                task.capture = capture;
                task.eventName = eventName;
                if (isHandleEvent) {
                    // save original delegate for compare to check duplicate
                    task.originalDelegate = delegate;
                }
                if (!prepend) {
                    existingTasks.push(task);
                }
                else {
                    existingTasks.unshift(task);
                }
                if (returnTarget) {
                    return target;
                }
            };
        };
        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
        if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }
        proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var options = arguments[2];
            var capture;
            if (options === undefined) {
                capture = false;
            }
            else if (options === true) {
                capture = true;
            }
            else if (options === false) {
                capture = false;
            }
            else {
                capture = options ? !!options.capture : false;
            }
            var delegate = arguments[1];
            if (!delegate) {
                return nativeRemoveEventListener.apply(this, arguments);
            }
            if (validateHandler &&
                !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                return;
            }
            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;
            if (symbolEventNames) {
                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }
            var existingTasks = symbolEventName && target[symbolEventName];
            if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                    var existingTask = existingTasks[i];
                    if (compare(existingTask, delegate)) {
                        existingTasks.splice(i, 1);
                        // set isRemoved to data for faster invokeTask check
                        existingTask.isRemoved = true;
                        if (existingTasks.length === 0) {
                            // all tasks for the eventName + capture have gone,
                            // remove globalZoneAwareCallback and remove the task cache from target
                            existingTask.allRemoved = true;
                            target[symbolEventName] = null;
                        }
                        existingTask.zone.cancelTask(existingTask);
                        if (returnTarget) {
                            return target;
                        }
                        return;
                    }
                }
            }
            // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.
            return nativeRemoveEventListener.apply(this, arguments);
        };
        proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var listeners = [];
            var tasks = findEventTasks(target, eventName);
            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                listeners.push(delegate);
            }
            return listeners;
        };
        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            if (!eventName) {
                var keys = Object.keys(target);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    var evtName = match && match[1];
                    // in nodejs EventEmitter, removeListener event is
                    // used for monitoring the removeListener call,
                    // so just keep removeListener eventListener until
                    // all other eventListeners are removed
                    if (evtName && evtName !== 'removeListener') {
                        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                    }
                }
                // remove removeListener listener finally
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            }
            else {
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                if (symbolEventNames) {
                    var symbolEventName = symbolEventNames[FALSE_STR];
                    var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                    var tasks = target[symbolEventName];
                    var captureTasks = target[symbolCaptureEventName];
                    if (tasks) {
                        var removeTasks = tasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                    if (captureTasks) {
                        var removeTasks = captureTasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                }
            }
            if (returnTarget) {
                return this;
            }
        };
        // for native toString patch
        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
        if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }
        if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }
        return true;
    }
    var results = [];
    for (var i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }
    return results;
}
function findEventTasks(target, eventName) {
    var foundTasks = [];
    for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];
        if (evtName && (!eventName || evtName === eventName)) {
            var tasks = target[prop];
            if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                    foundTasks.push(tasks[i]);
                }
            }
        }
    }
    return foundTasks;
}
function patchEventPrototype(global, api) {
    var Event = global['Event'];
    if (Event && Event.prototype) {
        api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) { return function (self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
            // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not
            delegate && delegate.apply(self, args);
        }; });
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
    var setNative = null;
    var clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    var tasksByHandleId = {};
    function scheduleTask(task) {
        var data = task.data;
        function timer() {
            try {
                task.invoke.apply(this, arguments);
            }
            finally {
                // issue-934, task will be cancelled
                // even it is a periodic task such as
                // setInterval
                if (!(task.data && task.data.isPeriodic)) {
                    if (typeof data.handleId === 'number') {
                        // in non-nodejs env, we remove timerId
                        // from local cache
                        delete tasksByHandleId[data.handleId];
                    }
                    else if (data.handleId) {
                        // Node returns complex objects as handleIds
                        // we remove task reference from timer object
                        data.handleId[taskSymbol] = null;
                    }
                }
            }
        }
        data.args[0] = timer;
        data.handleId = setNative.apply(window, data.args);
        return task;
    }
    function clearTask(task) {
        return clearNative(task.data.handleId);
    }
    setNative =
        patchMethod(window, setName, function (delegate) { return function (self, args) {
            if (typeof args[0] === 'function') {
                var options = {
                    handleId: null,
                    isPeriodic: nameSuffix === 'Interval',
                    delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 : null,
                    args: args
                };
                var task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                if (!task) {
                    return task;
                }
                // Node.js must additionally support the ref and unref functions.
                var handle = task.data.handleId;
                if (typeof handle === 'number') {
                    // for non nodejs env, we save handleId: task
                    // mapping in local cache for clearTimeout
                    tasksByHandleId[handle] = task;
                }
                else if (handle) {
                    // for nodejs env, we save task
                    // reference in timerId Object for clearTimeout
                    handle[taskSymbol] = task;
                }
                // check whether handle is null, because some polyfill or browser
                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                    typeof handle.unref === 'function') {
                    task.ref = handle.ref.bind(handle);
                    task.unref = handle.unref.bind(handle);
                }
                if (typeof handle === 'number' || handle) {
                    return handle;
                }
                return task;
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(window, args);
            }
        }; });
    clearNative =
        patchMethod(window, cancelName, function (delegate) { return function (self, args) {
            var id = args[0];
            var task;
            if (typeof id === 'number') {
                // non nodejs env.
                task = tasksByHandleId[id];
            }
            else {
                // nodejs env.
                task = id && id[taskSymbol];
                // other environments.
                if (!task) {
                    task = id;
                }
            }
            if (task && typeof task.type === 'string') {
                if (task.state !== 'notScheduled' &&
                    (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                    if (typeof id === 'number') {
                        delete tasksByHandleId[id];
                    }
                    else if (id) {
                        id[taskSymbol] = null;
                    }
                    // Do not cancel already canceled functions
                    task.zone.cancelTask(task);
                }
            }
            else {
                // cause an error by calling it directly.
                delegate.apply(window, args);
            }
        }; });
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/*
 * This is necessary for Chrome and Chrome mobile, to enable
 * things like redefining `createdCallback` on an element.
 */
var _defineProperty = Object[zoneSymbol('defineProperty')] = Object.defineProperty;
var _getOwnPropertyDescriptor = Object[zoneSymbol('getOwnPropertyDescriptor')] =
    Object.getOwnPropertyDescriptor;
var _create = Object.create;
var unconfigurablesKey = zoneSymbol('unconfigurables');
function propertyPatch() {
    Object.defineProperty = function (obj, prop, desc) {
        if (isUnconfigurable(obj, prop)) {
            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
        }
        var originalConfigurableFlag = desc.configurable;
        if (prop !== 'prototype') {
            desc = rewriteDescriptor(obj, prop, desc);
        }
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };
    Object.defineProperties = function (obj, props) {
        Object.keys(props).forEach(function (prop) {
            Object.defineProperty(obj, prop, props[prop]);
        });
        return obj;
    };
    Object.create = function (obj, proto) {
        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
            Object.keys(proto).forEach(function (prop) {
                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
            });
        }
        return _create(obj, proto);
    };
    Object.getOwnPropertyDescriptor = function (obj, prop) {
        var desc = _getOwnPropertyDescriptor(obj, prop);
        if (isUnconfigurable(obj, prop)) {
            desc.configurable = false;
        }
        return desc;
    };
}
function _redefineProperty(obj, prop, desc) {
    var originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
}
function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
}
function rewriteDescriptor(obj, prop, desc) {
    // issue-927, if the desc is frozen, don't try to change the desc
    if (!Object.isFrozen(desc)) {
        desc.configurable = true;
    }
    if (!desc.configurable) {
        // issue-927, if the obj is frozen, don't try to set the desc to obj
        if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
        }
        if (obj[unconfigurablesKey]) {
            obj[unconfigurablesKey][prop] = true;
        }
    }
    return desc;
}
function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
        return _defineProperty(obj, prop, desc);
    }
    catch (error) {
        if (desc.configurable) {
            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
            // retry with the original flag value
            if (typeof originalConfigurableFlag == 'undefined') {
                delete desc.configurable;
            }
            else {
                desc.configurable = originalConfigurableFlag;
            }
            try {
                return _defineProperty(obj, prop, desc);
            }
            catch (error) {
                var descJson = null;
                try {
                    descJson = JSON.stringify(desc);
                }
                catch (error) {
                    descJson = desc.toString();
                }
                console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
            }
        }
        else {
            throw error;
        }
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// we have to patch the instance since the proto is non-configurable
function apply(api, _global) {
    var WS = _global.WebSocket;
    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
    // On older Chrome, no need since EventTarget was already patched
    if (!_global.EventTarget) {
        patchEventTarget(_global, [WS.prototype]);
    }
    _global.WebSocket = function (x, y) {
        var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
        var proxySocket;
        var proxySocketProto;
        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
        var onmessageDesc = ObjectGetOwnPropertyDescriptor(socket, 'onmessage');
        if (onmessageDesc && onmessageDesc.configurable === false) {
            proxySocket = ObjectCreate(socket);
            // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
            // but proxySocket not, so we will keep socket as prototype and pass it to
            // patchOnProperties method
            proxySocketProto = socket;
            [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
                proxySocket[propName] = function () {
                    var args = ArraySlice.call(arguments);
                    if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
                        var eventName = args.length > 0 ? args[0] : undefined;
                        if (eventName) {
                            var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);
                            socket[propertySymbol] = proxySocket[propertySymbol];
                        }
                    }
                    return socket[propName].apply(socket, args);
                };
            });
        }
        else {
            // we can patch the real socket
            proxySocket = socket;
        }
        patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
        return proxySocket;
    };
    var globalWebSocket = _global['WebSocket'];
    for (var prop in WS) {
        globalWebSocket[prop] = WS[prop];
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
var globalEventHandlersEventNames = [
    'abort',
    'animationcancel',
    'animationend',
    'animationiteration',
    'auxclick',
    'beforeinput',
    'blur',
    'cancel',
    'canplay',
    'canplaythrough',
    'change',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'cuechange',
    'click',
    'close',
    'contextmenu',
    'curechange',
    'dblclick',
    'drag',
    'dragend',
    'dragenter',
    'dragexit',
    'dragleave',
    'dragover',
    'drop',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'focus',
    'focusin',
    'focusout',
    'gotpointercapture',
    'input',
    'invalid',
    'keydown',
    'keypress',
    'keyup',
    'load',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'lostpointercapture',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'mousewheel',
    'orientationchange',
    'pause',
    'play',
    'playing',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerlockchange',
    'mozpointerlockchange',
    'webkitpointerlockerchange',
    'pointerlockerror',
    'mozpointerlockerror',
    'webkitpointerlockerror',
    'pointermove',
    'pointout',
    'pointerover',
    'pointerup',
    'progress',
    'ratechange',
    'reset',
    'resize',
    'scroll',
    'seeked',
    'seeking',
    'select',
    'selectionchange',
    'selectstart',
    'show',
    'sort',
    'stalled',
    'submit',
    'suspend',
    'timeupdate',
    'volumechange',
    'touchcancel',
    'touchmove',
    'touchstart',
    'touchend',
    'transitioncancel',
    'transitionend',
    'waiting',
    'wheel'
];
var documentEventNames = [
    'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'fullscreenchange',
    'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
    'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
    'visibilitychange'
];
var windowEventNames = [
    'absolutedeviceorientation',
    'afterinput',
    'afterprint',
    'appinstalled',
    'beforeinstallprompt',
    'beforeprint',
    'beforeunload',
    'devicelight',
    'devicemotion',
    'deviceorientation',
    'deviceorientationabsolute',
    'deviceproximity',
    'hashchange',
    'languagechange',
    'message',
    'mozbeforepaint',
    'offline',
    'online',
    'paint',
    'pageshow',
    'pagehide',
    'popstate',
    'rejectionhandled',
    'storage',
    'unhandledrejection',
    'unload',
    'userproximity',
    'vrdisplyconnected',
    'vrdisplaydisconnected',
    'vrdisplaypresentchange'
];
var htmlElementEventNames = [
    'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
    'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
    'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
];
var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
var ieElementEventNames = [
    'activate',
    'afterupdate',
    'ariarequest',
    'beforeactivate',
    'beforedeactivate',
    'beforeeditfocus',
    'beforeupdate',
    'cellchange',
    'controlselect',
    'dataavailable',
    'datasetchanged',
    'datasetcomplete',
    'errorupdate',
    'filterchange',
    'layoutcomplete',
    'losecapture',
    'move',
    'moveend',
    'movestart',
    'propertychange',
    'resizeend',
    'resizestart',
    'rowenter',
    'rowexit',
    'rowsdelete',
    'rowsinserted',
    'command',
    'compassneedscalibration',
    'deactivate',
    'help',
    'mscontentzoom',
    'msmanipulationstatechanged',
    'msgesturechange',
    'msgesturedoubletap',
    'msgestureend',
    'msgesturehold',
    'msgesturestart',
    'msgesturetap',
    'msgotpointercapture',
    'msinertiastart',
    'mslostpointercapture',
    'mspointercancel',
    'mspointerdown',
    'mspointerenter',
    'mspointerhover',
    'mspointerleave',
    'mspointermove',
    'mspointerout',
    'mspointerover',
    'mspointerup',
    'pointerout',
    'mssitemodejumplistitemremoved',
    'msthumbnailclick',
    'stop',
    'storagecommit'
];
var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
var formEventNames = ['autocomplete', 'autocompleteerror'];
var detailEventNames = ['toggle'];
var frameEventNames = ['load'];
var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
var marqueeEventNames = ['bounce', 'finish', 'start'];
var XMLHttpRequestEventNames = [
    'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
    'readystatechange'
];
var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
var websocketEventNames = ['close', 'error', 'open', 'message'];
var workerEventNames = ['error', 'message'];
var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties) {
        return onProperties;
    }
    var tip = ignoreProperties.filter(function (ip) { return ip.target === target; });
    if (!tip || tip.length === 0) {
        return onProperties;
    }
    var targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(function (op) { return targetIgnoreProperties.indexOf(op) === -1; });
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
        return;
    }
    var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
}
function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
        return;
    }
    var supportsWebSocket = typeof WebSocket !== 'undefined';
    if (canPatchViaPropertyDescriptor()) {
        var ignoreProperties = _global.__Zone_ignore_on_properties;
        // for browsers that we can patch the descriptor:  Chrome & Firefox
        if (isBrowser) {
            var internalWindow = window;
            // in IE/Edge, onProp not exist in window object, but in WindowPrototype
            // so we need to pass WindowPrototype to check onProp exist or not
            patchFilteredProperties(internalWindow, eventNames.concat(['messageerror']), ignoreProperties, ObjectGetPrototypeOf(internalWindow));
            patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
            if (typeof internalWindow['SVGElement'] !== 'undefined') {
                patchFilteredProperties(internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
            }
            patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
            patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
            patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
            var HTMLMarqueeElement_1 = internalWindow['HTMLMarqueeElement'];
            if (HTMLMarqueeElement_1) {
                patchFilteredProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames, ignoreProperties);
            }
            var Worker_1 = internalWindow['Worker'];
            if (Worker_1) {
                patchFilteredProperties(Worker_1.prototype, workerEventNames, ignoreProperties);
            }
        }
        patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
        var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];
        if (XMLHttpRequestEventTarget) {
            patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }
        if (typeof IDBIndex !== 'undefined') {
            patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
        }
        if (supportsWebSocket) {
            patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
        }
    }
    else {
        // Safari, Android browsers (Jelly Bean)
        patchViaCapturingAllTheEvents();
        patchClass('XMLHttpRequest');
        if (supportsWebSocket) {
            apply(api, _global);
        }
    }
}
function canPatchViaPropertyDescriptor() {
    if ((isBrowser || isMix) && !ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
        typeof Element !== 'undefined') {
        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
        // IDL interface attributes are not configurable
        var desc = ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
        if (desc && !desc.configurable)
            return false;
    }
    var ON_READY_STATE_CHANGE = 'onreadystatechange';
    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    var xhrDesc = ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE);
    // add enumerable and configurable here because in opera
    // by default XMLHttpRequest.prototype.onreadystatechange is undefined
    // without adding enumerable and configurable will cause onreadystatechange
    // non-configurable
    // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
    // we should set a real desc instead a fake one
    if (xhrDesc) {
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return true;
            }
        });
        var req = new XMLHttpRequest();
        var result = !!req.onreadystatechange;
        // restore original desc
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
        return result;
    }
    else {
        var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = zoneSymbol('fake');
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
            },
            set: function (value) {
                this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
            }
        });
        var req = new XMLHttpRequest();
        var detectFunc = function () { };
        req.onreadystatechange = detectFunc;
        var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
        req.onreadystatechange = null;
        return result;
    }
}
var unboundKey = zoneSymbol('unbound');
// Whenever any eventListener fires, we check the eventListener target and all parents
// for `onwhatever` properties and replace them with zone-bound functions
// - Chrome (for now)
function patchViaCapturingAllTheEvents() {
    var _loop_1 = function (i) {
        var property = eventNames[i];
        var onproperty = 'on' + property;
        self.addEventListener(property, function (event) {
            var elt = event.target, bound, source;
            if (elt) {
                source = elt.constructor['name'] + '.' + onproperty;
            }
            else {
                source = 'unknown.' + onproperty;
            }
            while (elt) {
                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                    bound = wrapWithCurrentZone(elt[onproperty], source);
                    bound[unboundKey] = elt[onproperty];
                    elt[onproperty] = bound;
                }
                elt = elt.parentElement;
            }
        }, true);
    };
    for (var i = 0; i < eventNames.length; i++) {
        _loop_1(i);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
    var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'
        .split(',');
    var EVENT_TARGET = 'EventTarget';
    var apis = [];
    var isWtf = _global['wtf'];
    var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');
    if (isWtf) {
        // Workaround for: https://github.com/google/tracing-framework/issues/555
        apis = WTF_ISSUE_555_ARRAY.map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
    }
    else if (_global[EVENT_TARGET]) {
        apis.push(EVENT_TARGET);
    }
    else {
        // Note: EventTarget is not available in all browsers,
        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
        apis = NO_EVENT_TARGET;
    }
    var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
    var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
    var ieOrEdge = isIEOrEdge();
    var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
    var FUNCTION_WRAPPER = '[object FunctionWrapper]';
    var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames$1[eventName] = {};
        zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
    }
    //  predefine all task.source string
    for (var i = 0; i < WTF_ISSUE_555.length; i++) {
        var target = WTF_ISSUE_555_ARRAY[i];
        var targets = globalSources[target] = {};
        for (var j = 0; j < eventNames.length; j++) {
            var eventName = eventNames[j];
            targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
        }
    }
    var checkIEAndCrossContext = function (nativeDelegate, delegate, target, args) {
        if (!isDisableIECheck && ieOrEdge) {
            if (isEnableCrossContextCheck) {
                try {
                    var testString = delegate.toString();
                    if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                        nativeDelegate.apply(target, args);
                        return false;
                    }
                }
                catch (error) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
            else {
                var testString = delegate.toString();
                if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
        }
        else if (isEnableCrossContextCheck) {
            try {
                delegate.toString();
            }
            catch (error) {
                nativeDelegate.apply(target, args);
                return false;
            }
        }
        return true;
    };
    var apiTypes = [];
    for (var i = 0; i < apis.length; i++) {
        var type = _global[apis[i]];
        apiTypes.push(type && type.prototype);
    }
    // vh is validateHandler to check event handler
    // is valid or not(for security check)
    patchEventTarget(_global, apiTypes, { vh: checkIEAndCrossContext });
    api.patchEventTarget = patchEventTarget;
    return true;
}
function patchEvent(global, api) {
    patchEventPrototype(global, api);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function registerElementPatch(_global) {
    if ((!isBrowser && !isMix) || !('registerElement' in _global.document)) {
        return;
    }
    var _registerElement = document.registerElement;
    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
    document.registerElement = function (name, opts) {
        if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
                var source = 'Document.registerElement::' + callback;
                var prototype = opts.prototype;
                if (prototype.hasOwnProperty(callback)) {
                    var descriptor = ObjectGetOwnPropertyDescriptor(prototype, callback);
                    if (descriptor && descriptor.value) {
                        descriptor.value = wrapWithCurrentZone(descriptor.value, source);
                        _redefineProperty(opts.prototype, callback, descriptor);
                    }
                    else {
                        prototype[callback] = wrapWithCurrentZone(prototype[callback], source);
                    }
                }
                else if (prototype[callback]) {
                    prototype[callback] = wrapWithCurrentZone(prototype[callback], source);
                }
            });
        }
        return _registerElement.call(document, name, opts);
    };
    attachOriginToPatched(document.registerElement, _registerElement);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
Zone.__load_patch('util', function (global, Zone, api) {
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
});
Zone.__load_patch('timers', function (global) {
    var set = 'set';
    var clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', function (global) {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', function (global, Zone) {
    var blockingMethods = ['alert', 'prompt', 'confirm'];
    for (var i = 0; i < blockingMethods.length; i++) {
        var name_1 = blockingMethods[i];
        patchMethod(global, name_1, function (delegate, symbol, name) {
            return function (s, args) {
                return Zone.current.run(delegate, global, args, name);
            };
        });
    }
});
Zone.__load_patch('EventTarget', function (global, Zone, api) {
    // load blackListEvents from global
    var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
    }
    patchEvent(global, api);
    eventTargetPatch(global, api);
    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
    var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
    }
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
    patchClass('IntersectionObserver');
    patchClass('FileReader');
});
Zone.__load_patch('on_property', function (global, Zone, api) {
    propertyDescriptorPatch(api, global);
    propertyPatch();
    registerElementPatch(global);
});
Zone.__load_patch('canvas', function (global) {
    var HTMLCanvasElement = global['HTMLCanvasElement'];
    if (typeof HTMLCanvasElement !== 'undefined' && HTMLCanvasElement.prototype &&
        HTMLCanvasElement.prototype.toBlob) {
        patchMacroTask(HTMLCanvasElement.prototype, 'toBlob', function (self, args) {
            return { name: 'HTMLCanvasElement.toBlob', target: self, cbIdx: 0, args: args };
        });
    }
});
Zone.__load_patch('XHR', function (global, Zone) {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    var XHR_TASK = zoneSymbol('xhrTask');
    var XHR_SYNC = zoneSymbol('xhrSync');
    var XHR_LISTENER = zoneSymbol('xhrListener');
    var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    var XHR_URL = zoneSymbol('xhrURL');
    function patchXHR(window) {
        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        function findPendingTask(target) {
            return target[XHR_TASK];
        }
        var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        if (!oriAddListener) {
            var XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];
            if (XMLHttpRequestEventTarget) {
                var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
                oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
        }
        var READY_STATE_CHANGE = 'readystatechange';
        var SCHEDULED = 'scheduled';
        function scheduleTask(task) {
            XMLHttpRequest[XHR_SCHEDULED] = false;
            var data = task.data;
            var target = data.target;
            // remove existing event listener
            var listener = target[XHR_LISTENER];
            if (!oriAddListener) {
                oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
            if (listener) {
                oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }
            var newListener = target[XHR_LISTENER] = function () {
                if (target.readyState === target.DONE) {
                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                    // readyState=4 multiple times, so we need to check task state here
                    if (!data.aborted && XMLHttpRequest[XHR_SCHEDULED] && task.state === SCHEDULED) {
                        task.invoke();
                    }
                }
            };
            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            var storedTask = target[XHR_TASK];
            if (!storedTask) {
                target[XHR_TASK] = task;
            }
            sendNative.apply(target, data.args);
            XMLHttpRequest[XHR_SCHEDULED] = true;
            return task;
        }
        function placeholderCallback() { }
        function clearTask(task) {
            var data = task.data;
            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.
            data.aborted = true;
            return abortNative.apply(data.target, data.args);
        }
        var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () { return function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
        }; });
        var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () { return function (self, args) {
            if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
            }
            else {
                var options = {
                    target: self,
                    url: self[XHR_URL],
                    isPeriodic: false,
                    delay: null,
                    args: args,
                    aborted: false
                };
                return scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
            }
        }; });
        var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () { return function (self) {
            var task = findPendingTask(self);
            if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || (task.data && task.data.aborted)) {
                    return;
                }
                task.zone.cancelTask(task);
            }
            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.
        }; });
    }
});
Zone.__load_patch('geolocation', function (global) {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
});
Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
        return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
                // windows has added unhandledrejection event listener
                // trigger the event listener
                var PromiseRejectionEvent = global['PromiseRejectionEvent'];
                if (PromiseRejectionEvent) {
                    var evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                    eventTask.invoke(evt);
                }
            });
        };
    }
    if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
            findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] =
            findPromiseRejectionHandler('rejectionhandled');
    }
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

})));


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statistics/statistics.component */ "./src/app/statistics/statistics.component.ts");
/* harmony import */ var _block_grid_block_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block-grid/block-grid.component */ "./src/app/block-grid/block-grid.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _email_email_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./email/email.component */ "./src/app/email/email.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _block_list_block_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./block-list/block-list.component */ "./src/app/block-list/block-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'portfolio', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_9__["PortfolioComponent"], data: { text: 'My portfolio', iconName: 'account_box' },
        canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], data: { text: 'Top 100 Crypto`s', iconName: 'call_made' } },
    { path: 'block-grid', component: _block_grid_block_grid_component__WEBPACK_IMPORTED_MODULE_4__["BlockGridComponent"], data: { text: 'Grid view', iconName: 'grid_on', subItem: true } },
    { path: 'block-list', component: _block_list_block_list_component__WEBPACK_IMPORTED_MODULE_10__["BlockListComponent"], data: { text: 'List view', iconName: 'list_alt', subItem: true } },
    { path: 'statistics', component: _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_3__["StatisticsComponent"],
        data: { text: 'Volatility', iconName: 'insert_chart_outlined', cryptoName: 'BTC', daysCount: 100 } },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'email', component: _email_email_component__WEBPACK_IMPORTED_MODULE_7__["EmailComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n  width: 100%;\r\n}\r\n\r\n.content {\r\n  flex: 1 1 100%;\r\n}\r\n\r\n.temp {\r\n  vertical-align:top;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" igxLayout>\r\n    <igx-nav-drawer #nav id=\"project-menu\" isOpen=\"true\" [enableGestures]='true' width=\"280px\" [pin]=\"true\">\r\n      <ng-template igxDrawer>\r\n        <span igxDrawerItem [isHeader]=\"true\">Menu</span>\r\n        <span *ngFor=\"let route of topNavLinks\" igxDrawerItem igxRipple routerLinkActive=\"igx-nav-drawer__item--active\" routerLink=\"{{route.path}}\">\r\n            <span *ngIf=\"route.subItem\">&nbsp;&nbsp;&nbsp;&nbsp;</span>\r\n            <igx-icon fontSet=\"material\" name=\"{{route.icon}}\"></igx-icon>\r\n            <span>{{route.name}}</span>\r\n        </span>\r\n      </ng-template>\r\n      <!-- <ng-template igxDrawerMini>\r\n          <span igxDrawerItem igxRipple>\r\n              <igx-icon fontSet=\"material\" name=\"lock\"></igx-icon>\r\n          </span>\r\n      </ng-template> -->\r\n    </igx-nav-drawer>\r\n    <div igxFlex>\r\n      <igx-navbar title=\"Crypto Blockfolio App\" actionButtonIcon=\"menu\" (onAction)=\"nav.toggle()\" igxFlex>\r\n        <span>\r\n          <div *ngIf=\"afAuth.authState | async as user; else showLogin\">\r\n            <span *ngIf=\"innerWidth > 630\">Hey {{ user.displayName }}!</span>\r\n            <button igxButton=\"raised\" igxRipple (click)=\"logout()\">Logout</button>\r\n          </div>\r\n          <ng-template #showLogin>\r\n            <div><button igxButton=\"raised\" igxRipple (click)=\"login()\">Login</button></div>\r\n          </ng-template>\r\n        </span>\r\n        <!-- for mobile view -->\r\n        <!-- <span>\r\n            <div *ngIf=\"afAuth.authState | async as user; else showLogin\">\r\n              Hey {{ user.displayName }}!\r\n              <button igxButton=\"raised\" igxRipple (click)=\"logout()\"><igx-icon fontSet=\"material\" name=\"lock\"></igx-icon></button>\r\n            </div>\r\n            <ng-template #showLogin>\r\n              <div><button igxButton=\"raised\" igxRipple (click)=\"login()\"><igx-icon fontSet=\"material\" name=\"lock_open\"></igx-icon></button></div>\r\n            </ng-template>\r\n          </span> -->\r\n      </igx-navbar>\r\n      <div class=\"content\" igxLayout igxLayoutJustify=\"center\">\r\n        <router-outlet></router-outlet>\r\n       </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var igniteui_angular_navigation_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! igniteui-angular/navigation-drawer */ "./node_modules/igniteui-angular/navigation-drawer/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(router, afAuth) {
        var _this = this;
        this.router = router;
        this.afAuth = afAuth;
        this.topNavLinks = [];
        for (var _i = 0, routes_1 = _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routes"]; _i < routes_1.length; _i++) {
            var route = routes_1[_i];
            if (route.path && route.data && route.path.indexOf('*') === -1) {
                this.topNavLinks.push({
                    name: route.data.text,
                    path: '/' + route.path,
                    icon: route.data.iconName,
                    subItem: route.data.subItem
                });
            }
        }
        this.afAuth.authState.subscribe(function (auth) {
            if (auth) {
                _this.name = auth;
            }
        });
    }
    AppComponent.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .filter(function (x) { return x instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]; })
            .subscribe(function (event) {
            if (event.url !== '/' && !_this.navdrawer.pin) {
                // Close drawer when selecting a view on mobile (unpinned)
                _this.navdrawer.close();
            }
        });
        this.innerWidth = window.innerWidth;
    };
    AppComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
        this.router.navigateByUrl('/home');
    };
    AppComponent.prototype.login = function () {
        this.router.navigate(['/login']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(igniteui_angular_navigation_drawer__WEBPACK_IMPORTED_MODULE_4__["IgxNavigationDrawerComponent"]),
        __metadata("design:type", igniteui_angular_navigation_drawer__WEBPACK_IMPORTED_MODULE_4__["IgxNavigationDrawerComponent"])
    ], AppComponent.prototype, "navdrawer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onResize", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: firebaseConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var igniteui_angular_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! igniteui-angular/main */ "./node_modules/igniteui-angular/main.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./statistics/statistics.component */ "./src/app/statistics/statistics.component.ts");
/* harmony import */ var igniteui_angular_charts_ES5_igx_financial_chart_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-financial-chart-module */ "./node_modules/igniteui-angular-charts/ES5/igx-financial-chart-module.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _block_grid_block_grid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./block-grid/block-grid.component */ "./src/app/block-grid/block-grid.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _email_email_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./email/email.component */ "./src/app/email/email.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _block_list_block_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./block-list/block-list.component */ "./src/app/block-list/block-list.component.ts");
/* harmony import */ var _block_item_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./block-item.service */ "./src/app/block-item.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var firebaseConfig = {
    apiKey: 'AIzaSyASqXec1QsPpOZ6Pbgk5YuYOnmiewOOvhc',
    authDomain: 'crypto-portfolio-tracker.firebaseapp.com',
    databaseURL: 'https://crypto-portfolio-tracker.firebaseio.com',
    projectId: 'crypto-portfolio-tracker',
    storageBucket: 'crypto-portfolio-tracker.appspot.com',
    messagingSenderId: '1078645280256'
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_8__["StatisticsComponent"],
                _block_grid_block_grid_component__WEBPACK_IMPORTED_MODULE_12__["BlockGridComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _email_email_component__WEBPACK_IMPORTED_MODULE_19__["EmailComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_20__["SignupComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_22__["PortfolioComponent"],
                _block_list_block_list_component__WEBPACK_IMPORTED_MODULE_23__["BlockListComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                igniteui_angular_main__WEBPACK_IMPORTED_MODULE_6__["IgxNavigationDrawerModule"],
                igniteui_angular_main__WEBPACK_IMPORTED_MODULE_6__["IgxNavbarModule"],
                igniteui_angular_main__WEBPACK_IMPORTED_MODULE_6__["IgxLayoutModule"],
                igniteui_angular_main__WEBPACK_IMPORTED_MODULE_6__["IgxRippleModule"],
                igniteui_angular_charts_ES5_igx_financial_chart_module__WEBPACK_IMPORTED_MODULE_9__["IgxFinancialChartModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                igniteui_angular_main__WEBPACK_IMPORTED_MODULE_6__["IgxAvatarModule"],
                igniteui_angular_main__WEBPACK_IMPORTED_MODULE_6__["IgxButtonModule"],
                igniteui_angular_main__WEBPACK_IMPORTED_MODULE_6__["IgxIconModule"],
                igniteui_angular_main__WEBPACK_IMPORTED_MODULE_6__["IgxCardModule"],
                igniteui_angular_main__WEBPACK_IMPORTED_MODULE_6__["IgxInputGroupModule"],
                igniteui_angular_main__WEBPACK_IMPORTED_MODULE_6__["IgxListModule"],
                igniteui_angular_main__WEBPACK_IMPORTED_MODULE_6__["IgxFilterModule"],
                igniteui_angular_main__WEBPACK_IMPORTED_MODULE_6__["IgxTabsModule"],
                igniteui_angular_main__WEBPACK_IMPORTED_MODULE_6__["IgxSnackbarModule"],
                igniteui_angular_main__WEBPACK_IMPORTED_MODULE_6__["IgxDialogModule"],
                igniteui_angular_main__WEBPACK_IMPORTED_MODULE_6__["IgxGridModule"].forRoot(),
                angularfire2__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(firebaseConfig),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_15__["AngularFireStorageModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_17__["AngularFireDatabaseModule"]
            ],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"], _auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"], _block_item_service__WEBPACK_IMPORTED_MODULE_24__["ItemService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router, route) {
        this.auth = auth;
        this.router = router;
        this.route = route;
    }
    AuthGuard.prototype.canActivate = function (route, routerState) {
        var _this = this;
        return rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["Observable"].from(this.auth.authState)
            .take(1)
            .map(function (state) { return !!state; })
            .do(function (authenticated) {
            if (!authenticated) {
                _this.router.navigate(['/login'], {
                    queryParams: {
                        return: routerState.url
                    }
                });
            }
        });
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/block-grid/block-grid.component.css":
/*!*****************************************************!*\
  !*** ./src/app/block-grid/block-grid.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "igx-grid {\r\n    margin: 20px;\r\n}\r\n\r\n#refreshBtn {\r\n    margin-left: 20px;\r\n}"

/***/ }),

/***/ "./src/app/block-grid/block-grid.component.html":
/*!******************************************************!*\
  !*** ./src/app/block-grid/block-grid.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sample-wrapper\">\r\n    <div class=\"sample-content\">\r\n        <button id=\"refreshBtn\" igxButton=\"raised\" igxRipple (click)=\"refreshGrid()\">\r\n            <igx-icon>refresh</igx-icon>\r\n        </button>\r\n        <igx-grid #grid1 [data]=\"remoteData\" width=\"100%\" height=\"555px\">\r\n            <igx-column field='rank' header='#'></igx-column>\r\n            <igx-column field='name' header='Name' [filterable]=\"true\">\r\n                <ng-template igxCell let-cell=\"cell\" let-item>\r\n                    <img src=\"https://s2.coinmarketcap.com/static/img/coins/16x16/{{ cell.row.rowData.id }}.png\" />\r\n                    <span style=\"font-size: 1.5em\"> {{ item }}</span>\r\n                </ng-template>\r\n            </igx-column>\r\n            <igx-column field='quotes.USD.price' filterable=\"true\" dataType=\"number\">\r\n                <ng-template igxHeader let-column=\"column\">\r\n                    Price\r\n                </ng-template>\r\n                <ng-template igxCell let-item let-ri=\"rowIndex\" let-column=\"column\">\r\n                    $ {{ item }}\r\n                </ng-template>\r\n            </igx-column>\r\n            <igx-column field='total_supply' sortable=\"true\" filterable=\"true\" dataType=\"number\">\r\n                <ng-template igxHeader let-column=\"column\">\r\n                    Total supply\r\n                </ng-template>\r\n                <ng-template igxCell let-item let-ri=\"rowIndex\" let-column=\"column\">\r\n                    <span> $ {{ item | number:'3.0-5' }}</span>\r\n                </ng-template>\r\n            </igx-column>\r\n            <igx-column field='quotes.USD.percent_change_1h' sortable=\"true\">\r\n                <ng-template igxHeader let-column=\"column\">\r\n                    Change (1 h)\r\n                </ng-template>\r\n                <ng-template igxCell let-item let-ri=\"rowIndex\" let-column=\"column\">\r\n                    <span class=\"percent-style-{{ item >= 0 ? 'up' : 'down'}}\"> {{ item }} %</span>\r\n                </ng-template>\r\n            </igx-column>\r\n            <igx-column field='quotes.USD.percent_change_24h' sortable=\"true\">\r\n                <ng-template igxHeader let-column=\"column\">\r\n                    Change (24 h)\r\n                </ng-template>\r\n                <ng-template igxCell let-item let-ri=\"rowIndex\" let-column=\"column\">\r\n                    <span class=\"percent-style-{{ item >= 0 ? 'up' : 'down'}}\"> {{ item }} %</span>\r\n                </ng-template>\r\n            </igx-column>\r\n            <igx-column field='quotes.USD.percent_change_7d' sortable=\"true\">\r\n                <ng-template igxHeader let-column=\"column\">\r\n                    Change (7d)\r\n                </ng-template>\r\n                <ng-template igxCell let-item let-ri=\"rowIndex\" let-column=\"column\">\r\n                    <span class=\"percent-style-{{ item >= 0 ? 'up' : 'down'}}\"> {{ item }} %</span>\r\n                </ng-template>\r\n            </igx-column>\r\n        </igx-grid>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/block-grid/block-grid.component.ts":
/*!****************************************************!*\
  !*** ./src/app/block-grid/block-grid.component.ts ***!
  \****************************************************/
/*! exports provided: BlockGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockGridComponent", function() { return BlockGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var igniteui_angular_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! igniteui-angular/grid/grid.component */ "./node_modules/igniteui-angular/grid/grid.component.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlockGridComponent = /** @class */ (function () {
    function BlockGridComponent(data) {
        this.data = data;
        this.remoteData = [];
    }
    BlockGridComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    // tslint:disable-next-line:use-life-cycle-interface
    BlockGridComponent.prototype.ngAfterViewInit = function () {
        this.grid1.reflow();
    };
    BlockGridComponent.prototype.loadData = function () {
        var _this = this;
        this.data.getData()
            .subscribe(function (res) {
            _this.remoteData = _this.data.sortDataByKey(res, 'rank');
        });
    };
    BlockGridComponent.prototype.refreshGrid = function () {
        this.grid1.markForCheck();
        this.grid1.reflow();
        this.loadData();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('grid1'),
        __metadata("design:type", igniteui_angular_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["IgxGridComponent"])
    ], BlockGridComponent.prototype, "grid1", void 0);
    BlockGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-block-grid',
            template: __webpack_require__(/*! ./block-grid.component.html */ "./src/app/block-grid/block-grid.component.html"),
            styles: [__webpack_require__(/*! ./block-grid.component.css */ "./src/app/block-grid/block-grid.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], BlockGridComponent);
    return BlockGridComponent;
}());



/***/ }),

/***/ "./src/app/block-item.service.ts":
/*!***************************************!*\
  !*** ./src/app/block-item.service.ts ***!
  \***************************************/
/*! exports provided: ItemService, BlockItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockItem", function() { return BlockItem; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ItemService = /** @class */ (function () {
    function ItemService(db, auth, afs) {
        var _this = this;
        this.db = db;
        this.auth = auth;
        this.afs = afs;
        this.items = null; //  list of objects
        this.auth.authState.subscribe(function (user) {
            if (user) {
                _this.userId = user.uid;
            }
        });
    }
    // Return an observable list with optional query
    // You will usually call this from OnInit in a component
    ItemService.prototype.getItemsList = function () {
        if (!this.userId) {
            return;
        }
        this.items = this.db.list("items/" + this.userId);
        return this.items;
    };
    ItemService.prototype.createItem = function (item) {
        this.items = this.getItemsList();
        this.items.push(item);
        var listObservable = this.items.snapshotChanges();
        listObservable.subscribe();
    };
    ItemService.prototype.updateItem = function (key, item) {
        this.items.update(key, item).catch(function (error) { return console.log(error); });
    };
    ItemService.prototype.deleteItem = function (key) {
        this.items.remove(key).catch(function (error) { return console.log(error); });
    };
    ItemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]])
    ], ItemService);
    return ItemService;
}());

var BlockItem = /** @class */ (function () {
    function BlockItem() {
    }
    return BlockItem;
}());



/***/ }),

/***/ "./src/app/block-list/block-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/block-list/block-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sample-wrapper\">\r\n    <igx-input-group type=\"search\" class=\"search\">\r\n        <igx-prefix>\r\n            <igx-icon>search</igx-icon>\r\n        </igx-prefix>\r\n        <input #search igxInput placeholder=\"Search by name\" [(ngModel)]=\"searchCrypto\">\r\n        <igx-suffix *ngIf=\"search.value.length > 0\" (click)=\"searchCrypto = null\">\r\n            <igx-icon>clear</igx-icon>\r\n        </igx-suffix>\r\n    </igx-input-group>\r\n\r\n    <div class=\"list-sample\">\r\n        <igx-list [@listAnimation]=\"remoteData.length\">\r\n            <igx-list-item isHeader=\"true\">Cryptocurrencies</igx-list-item>\r\n            <igx-list-item #item *ngFor=\"let crypto of remoteData | igxFilter: filterCryptos;\">\r\n                <div class=\"item-container\">\r\n                    <div class=\"crypto\">\r\n                        <!-- <igx-avatar [src]=\"crypto.photo\" roundShape=\"true\"></igx-avatar> -->\r\n                        <div class=\"crypto__info\">\r\n                            <span class=\"name\">\r\n                                <!-- <span>\r\n                                <igx-icon [color]=\"crypto['quotes.USD.percent_change_7d'] >= 0 ? 'green' : 'red'\"\r\n                                    name=\"arrow_{{ crypto['quotes.USD.percent_change_7d'] >= 0 ? 'arrow_drop_up' : 'arrow_drop_down'}}\">\r\n                                </igx-icon>\r\n                            </span> -->\r\n                                <span class=\"li_item\">\r\n                                    {{ crypto.name }}\r\n                                    <!-- ({{crypto.symbol }}) -->\r\n                                </span>\r\n                                <span class=\"li_item\">${{ crypto['quotes.USD.price'] }}</span>\r\n                                <span class=\"percent-style-{{ crypto['quotes.USD.percent_change_7d'] >= 0 ? 'up' : 'down'}}\">\r\n                                    {{ crypto['quotes.USD.percent_change_7d'] }} %\r\n                                </span>(7d)\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </igx-list-item>\r\n        </igx-list>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/block-list/block-list.component.scss":
/*!******************************************************!*\
  !*** ./src/app/block-list/block-list.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 16px;\n  flex: initial; }\n\n.list-sample {\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12); }\n\nigx-icon {\n  cursor: pointer; }\n\n.item-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n\n.crypto {\n  display: flex;\n  align-items: center; }\n\n.crypto__info {\n    display: flex;\n    flex-flow: column nowrap;\n    margin-left: 24px; }\n\n.phone {\n  font-size: 0.875em;\n  line-height: 1; }\n\n.search {\n  margin-bottom: 16px; }\n\n.li_item {\n  width: 140px;\n  display: -ms-inline-grid;\n  display: inline-grid; }\n"

/***/ }),

/***/ "./src/app/block-list/block-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/block-list/block-list.component.ts ***!
  \****************************************************/
/*! exports provided: BlockListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockListComponent", function() { return BlockListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var igniteui_angular_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! igniteui-angular/main */ "./node_modules/igniteui-angular/main.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlockListComponent = /** @class */ (function () {
    function BlockListComponent(data) {
        this.data = data;
        this.remoteData = [];
    }
    BlockListComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    BlockListComponent.prototype.loadData = function () {
        var _this = this;
        this.data.getData()
            .subscribe(function (res) {
            _this.remoteData = _this.data.sortDataByKey(res, 'rank');
        });
    };
    Object.defineProperty(BlockListComponent.prototype, "filterCryptos", {
        get: function () {
            var fo = new igniteui_angular_main__WEBPACK_IMPORTED_MODULE_2__["IgxFilterOptions"]();
            fo.key = 'name';
            fo.inputValue = this.searchCrypto;
            return fo;
        },
        enumerable: true,
        configurable: true
    });
    BlockListComponent.prototype.toggleFavorite = function (crypto) {
        crypto.isFavorite = !crypto.isFavorite;
    };
    BlockListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-block-list',
            template: __webpack_require__(/*! ./block-list.component.html */ "./src/app/block-list/block-list.component.html"),
            styles: [__webpack_require__(/*! ./block-list.component.scss */ "./src/app/block-list/block-list.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('listAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* <=> *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0, transform: 'translateY(-15px)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["stagger"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('550ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1, transform: 'translateY(0px)' })))
                        ], { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 })), {
                            optional: true
                        })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], BlockListComponent);
    return BlockListComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _assets_offlineData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/offlineData */ "./src/assets/offlineData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(_http) {
        this._http = _http;
        this.flattenObject = function (ob) {
            var toReturn = {};
            for (var i in ob) {
                if (!ob.hasOwnProperty(i)) {
                    continue;
                }
                if ((typeof ob[i]) === 'object') {
                    var flatObject = this.flattenObject(ob[i]);
                    for (var x in flatObject) {
                        if (!flatObject.hasOwnProperty(x)) {
                            continue;
                        }
                        toReturn[i + '.' + x] = flatObject[x];
                    }
                }
                else {
                    toReturn[i] = ob[i];
                }
            }
            return toReturn;
        };
    }
    DataService.prototype.getData = function () {
        var _this = this;
        if (!this.cachedData) {
            // return this._http.get('https://api.coinmarketcap.com/v1/ticker/')
            this.cachedData = this._http.get('https://api.coinmarketcap.com/v2/ticker/?convert=BTC&limit=1000')
                .map(function (result) {
                var newData = [];
                if (result['metadata'].error === null) {
                    var fetchedData = Object.keys(result['data']);
                    for (var _i = 0, fetchedData_1 = fetchedData; _i < fetchedData_1.length; _i++) {
                        var key = fetchedData_1[_i];
                        newData.push(_this.flattenObject(result['data'][key]));
                    }
                }
                else {
                    newData = _assets_offlineData__WEBPACK_IMPORTED_MODULE_3__["offlineData"];
                }
                return newData;
            });
        }
        return this.cachedData;
    };
    DataService.prototype.getLastSevenDaysPrices = function (name, forDays) {
        return this._http.get('https://min-api.cryptocompare.com/data/histoday?fsym=' + name.toUpperCase() +
            '&tsym=USD&limit=' + forDays).map(function (result) {
            return result;
        });
    };
    DataService.prototype.getSpecificCoinData = function (cryptoId) {
        var _this = this;
        return this._http.get('https://api.coinmarketcap.com/v2/ticker/' + cryptoId + '/?structure=array').map(function (result) {
            return _this.flattenObject(result['data'][0]);
        });
    };
    DataService.prototype.getCryptoIdFromSymbol = function (symbol) {
        return this._http.get('https://api.coinmarketcap.com/v2/listings/').map(function (result) {
            var crypto = result['data'].filter(function (item) { return item.symbol === symbol; });
            return crypto[0];
        });
    };
    DataService.prototype.sortDataByKey = function (array, keyToSortBy) {
        function sortByKey(a, b) {
            var x = a[keyToSortBy];
            var y = b[keyToSortBy];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }
        return array.sort(sortByKey);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/email/email.component.html":
/*!********************************************!*\
  !*** ./src/app/email/email.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\r\n  <h2>Custom Login</h2>\r\n  <span class=\"error\" *ngIf=\"error\" [@fallIn]='state'>{{ error }}</span>\r\n  <form #formData='ngForm' (ngSubmit)=\"onSubmit(formData)\">\r\n    <igx-input-group>\r\n      <label igxLabel for=\"email\">Email address</label>\r\n      <input igxInput name=\"email\" type=\"email\" [(ngModel)]=\"email\" required />\r\n      <igx-suffix>\r\n        <igx-icon name=\"email\"></igx-icon>\r\n      </igx-suffix>\r\n    </igx-input-group>\r\n    <igx-input-group>\r\n      <label igxLabel for=\"password\">Password</label>\r\n      <input igxInput name=\"password\" type=\"password\" [(ngModel)]=\"password\" required />\r\n      <igx-suffix>\r\n        <igx-icon name=\"lock\"></igx-icon>\r\n      </igx-suffix>\r\n    </igx-input-group>\r\n    <br />\r\n    <button igxButton=\"raised\" igxRipple type=\"submit\" [disabled]=\"!formData.valid\" class=\"basic-btn\">Log in</button>\r\n    <a igxButton=\"raised\" igxRipple routerLink=\"/login\" id=\"goback\">Go back</a>\r\n    <br />\r\n    <a routerLink=\"/signup\" class=\"alc\">Don't have an account?</a>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/email/email.component.scss":
/*!********************************************!*\
  !*** ./src/app/email/email.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/email/email.component.ts":
/*!******************************************!*\
  !*** ./src/app/email/email.component.ts ***!
  \******************************************/
/*! exports provided: EmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComponent", function() { return EmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmailComponent = /** @class */ (function () {
    function EmailComponent(afAuth, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.router = router;
        this.state = '';
        this.afAuth.authState.subscribe(function (auth) {
            if (auth) {
                _this.router.navigateByUrl('/statistics');
            }
        });
    }
    EmailComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (formData.valid) {
            console.log(formData.value);
            this.afAuth.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password).then(function (success) {
                console.log(success);
                _this.router.navigate(['/statistics']);
            }).catch(function (err) {
                console.log(err);
                _this.error = err;
            });
        }
    };
    EmailComponent.prototype.ngOnInit = function () {
    };
    EmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-email',
            template: __webpack_require__(/*! ./email.component.html */ "./src/app/email/email.component.html"),
            styles: [__webpack_require__(/*! ./email.component.scss */ "./src/app/email/email.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_3__["moveIn"])(), Object(_router_animations__WEBPACK_IMPORTED_MODULE_3__["fallIn"])()],
            host: { '[@moveIn]': '' }
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EmailComponent);
    return EmailComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n  color: #731963;\r\n}\r\n\r\n.links{\r\n  text-align: center;\r\n  padding: 0 35px;\r\n}\r\n\r\n#linksContainer {\r\n  flex-flow: row wrap;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n:host{\r\n  text-align:center;\r\n}\r\n\r\nimg {\r\n  max-width:100%;\r\n}\r\n\r\n.card-wrapper {\r\n  max-width: 260px;\r\n  min-width: 260px;\r\n}\r\n\r\n.searchBox {\r\n  width:100%;\r\n  padding-left:15px;\r\n  padding-right: 15px;\r\n}\r\n\r\n.sample-content {\r\n  display:flex;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<div *ngIf=\"cryptos\">\r\n    <div class=\"sample-wrapper\">\r\n        <igx-input-group type=\"search\" class=\"searchBox\">\r\n            <input #input1 igxInput placeholder=\"Search by name\" [(ngModel)]=\"search1\" />\r\n            <igx-prefix>\r\n                <igx-icon>search</igx-icon>\r\n            </igx-prefix>\r\n            <igx-suffix *ngIf=\"input1.value.length > 0\" (click)=\"clear(input1)\">\r\n                <igx-icon>clear</igx-icon>\r\n            </igx-suffix>\r\n        </igx-input-group>\r\n        <div class=\"sample-content\">\r\n            <article class=\"sample-column card-wrapper\" *ngFor=\"let crypto of cryptos | igxFilter: filterOptions\" [@flyInOut]>\r\n                <igx-card>\r\n                    <igx-card-header>\r\n                        <h3 class=\"igx-card-header__title\">\r\n                            <img src=\"https://s2.coinmarketcap.com/static/img/coins/32x32/{{ crypto.id }}.png\" />\r\n                            <br />{{ crypto.name }} ({{ crypto.symbol }})</h3>\r\n                        <button igxButton igxRipple (click)=\"openChart($event, crypto.symbol)\">\r\n                            <igx-icon fontSet=\"material\">trending_up</igx-icon>\r\n                        </button>\r\n                    </igx-card-header>\r\n                    <igx-card-content>\r\n                        <p class=\"igx-card-content__text\">{{ crypto['quotes.USD.price'] }} USD\r\n                            <span class=\"percent-style-{{ crypto['quotes.USD.percent_change_24h'] >= 0 ? 'up' : 'down'}}\">({{ crypto['quotes.USD.percent_change_24h'] }})%</span>\r\n                        </p>\r\n                        <p class=\"igx-card-content__text\">Rank: {{ crypto.rank }}</p>\r\n                        <p class=\"igx-card-content__text\">Market Cap: {{ crypto['quotes.USD.market_cap'] | number:'3.0-5' }}</p>\r\n                        <p class=\"igx-card-content__text\">7d change:\r\n                            <span class=\"percent-style-{{ crypto['quotes.USD.percent_change_7d'] >= 0 ? 'up' : 'down'}}\">({{ crypto['quotes.USD.percent_change_7d'] }})%</span>\r\n                        </p>\r\n                    </igx-card-content>\r\n                </igx-card>\r\n            </article>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var igniteui_angular_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! igniteui-angular/main */ "./node_modules/igniteui-angular/main.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(data, router) {
        this.data = data;
        this.router = router;
        this.objectKeys = Object.keys;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    Object.defineProperty(HomeComponent.prototype, "filterOptions", {
        get: function () {
            var fo = new igniteui_angular_main__WEBPACK_IMPORTED_MODULE_2__["IgxFilterOptions"]();
            fo.key = 'name';
            fo.inputValue = this.search1 ? this.search1 : '';
            return fo;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.getData = function () {
        var _this = this;
        this.data.getData()
            .subscribe(function (res) {
            _this.cryptos = _this.data.sortDataByKey(res, 'rank');
        });
    };
    HomeComponent.prototype.clear = function (input) {
        input.value = '';
        this.getData();
    };
    HomeComponent.prototype.openChart = function (evt, symbol) {
        this.router.navigate(['/statistics', { text: 'Volatility', iconName: 'show_chart', cryptoName: symbol, daysCount: 100 }]);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_4__["flyInOut"])()]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  #lock {\r\n    width:40%;\r\n    margin: 1.5em auto 4em auto;\r\n    display:block;\r\n  }\r\n\r\n  #lockIcon {\r\n    width: 9.5rem;\r\n    height: 9.5rem;\r\n    font-size: 9.5rem;\r\n    color: rgb(24, 23, 23);\r\n    margin: 0.2em auto 0.1em auto;\r\n    display:block;\r\n  }\r\n\r\n  #fb {\r\n    background:#3B5998 url('facebook.svg') no-repeat 14px -5px;\r\n    background-size: 47px;\r\n    color:#fff;\r\n  }\r\n\r\n  #google {\r\n    border: 1px solid #95989A;\r\n    background: #fff  url('google.svg') no-repeat 25px;\r\n    background-size: 25px;\r\n    color:rgb(0, 0, 0);\r\n  }\r\n\r\n  #email {\r\n    background: #ECECEC  url('email.svg') no-repeat 25px;\r\n    background-size: 25px;\r\n    color:rgb(0, 0, 0);\r\n  }\r\n\r\n  @media (max-width: 600px) {\r\n    #page {\r\n        padding:1em;\r\n    }\r\n    #toolbar {\r\n        width:90%;\r\n        margin-left: -45%;\r\n    }\r\n    #fb {\r\n        background:#3B5998;\r\n    }\r\n\r\n    #google {\r\n        background: #fff;\r\n    }\r\n\r\n    #email {\r\n        background: #ECECEC;\r\n    }\r\n  }\r\n\r\n  body {\r\n    background:#E2E4E6;\r\n    padding-top:4em;\r\n  }\r\n\r\n  .alc {\r\n    text-align:center;\r\n    display:block;\r\n    margin: 15px 0;\r\n    text-decoration: underline;\r\n  }\r\n\r\n  .error {\r\n    background:#f1f0ef;\r\n    padding:1em;\r\n    width:100%;\r\n    display:block;\r\n    margin-bottom:20px;\r\n  }\r\n\r\n  @media (max-width: 600px) {\r\n    body {\r\n        padding-top:1.2em;\r\n    }\r\n\r\n    .form-container {\r\n        /* padding:1.2em; */\r\n        width:90%;\r\n        /* margin-left:-45%; */\r\n    }\r\n    button {\r\n        font-size:1em;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n  <igx-icon id=\"lockIcon\" name=\"lock_open\"></igx-icon>\n  <span class=\"error\" *ngIf=\"error\">{{ error }}</span>\n\n  <button class=\"button\" igxButton=\"raised\" igxRipple (click)=\"loginFb()\" id=\"fb\">Login With Facebook</button><br>\n  <button class=\"button\" igxButton=\"raised\" igxRipple (click)=\"loginGoogle()\" id=\"google\">Login With Google</button>\n  <button class=\"button\" igxButton=\"raised\" igxRipple routerLink=\"/email\" id=\"email\">Email</button>\n\n  <a routerLink=\"/signup\" routerLinkActive=\"active\" class=\"alc\">Sign up for an <strong>Account</strong></a>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';




var LoginComponent = /** @class */ (function () {
    function LoginComponent(afAuth, router, route) {
        var _this = this;
        this.afAuth = afAuth;
        this.router = router;
        this.route = route;
        this.return = '';
        this.afAuth.authState.subscribe(function (auth) {
            if (auth) {
                _this.router.navigateByUrl(_this.return);
            }
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get the query params
        this.route.queryParams
            .subscribe(function (params) { return _this.return = params['return'] || '/forums'; });
    };
    LoginComponent.prototype.loginFb = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].FacebookAuthProvider()).then(function (success) {
            _this.router.navigate([_this.return]);
        }).catch(function (err) {
            _this.error = err;
        });
    };
    LoginComponent.prototype.loginGoogle = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider()).then(function (success) {
            _this.router.navigate([_this.return]);
        }).catch(function (err) {
            _this.error = err;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_3__["moveIn"])()],
            host: { '[@moveIn]': '' }
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sample-wrapper\">\r\n    <div class=\"sample-content\">\r\n        <button id=\"refreshBtn\" igxButton=\"raised\" igxRipple (click)=\"updatePortfolio()\">\r\n            <igx-icon>refresh</igx-icon> Total Portfolio Value: {{ calculateTotalPortfolio() | number:'0.2-2' }}\r\n        </button>\r\n        <button id=\"addBtn\" igxButton=\"raised\" igxRipple (click)=\"form.open()\">\r\n                <igx-icon>playlist_add</igx-icon> Add coin\r\n        </button>\r\n        <igx-grid [data]=\"blockItems\" width=\"600px\" height=\"500px\" (onEditDone)=\"updateRow($event)\" (onSelection)=\"selectCell($event)\">\r\n            <igx-column field=\"coinSymbol\" field=\"coinSymbol\" sortable=\"true\">\r\n                <ng-template igxHeader let-column=\"column\">\r\n                    Coin symbol\r\n                </ng-template>\r\n                <ng-template igxCell let-cell=\"cell\" let-item let-ri=\"rowIndex\" let-column=\"column\">\r\n                    <a class=\"aStyle\" (click)=\"openChart($event, cell.row.rowData.coinSymbol)\">\r\n                        <div class=\"positionTop\">\r\n                            <img src=\"https://s2.coinmarketcap.com/static/img/coins/32x32/{{ cell.row.rowData.cryptoId }}.png\" />\r\n                            <span class=\"symbolPosition\">\r\n                                {{ cell.row.rowData.coinSymbol }}</span>\r\n                        </div>\r\n                    </a>\r\n                </ng-template>\r\n            </igx-column>\r\n            <!-- <igx-column field=\"holdings\" header=\"Holdings\" editable=\"true\" [hasSummary]=\"true\" [dataType]=\"'number'\"></igx-column> -->\r\n            <igx-column field=\"holdings\" header=\"Holdings\" editable=\"true\" sortable=\"true\">\r\n                <ng-template igxCell let-cell=\"cell\" let-item let-ri=\"rowIndex\" let-column=\"column\">\r\n                    <div class=\"positionTop\">\r\n                        ${{ calculateHoldings(cell.row.rowData.holdings, cell.row.rowData.usdPrice) | number:'0.2-2' }}\r\n                        <br />\r\n                        <b>{{ cell.row.rowData.holdings | number:'1.0-5'}}</b>\r\n                    </div>\r\n                </ng-template>\r\n            </igx-column>\r\n            <igx-column header=\"Price\" field=\"usdPrice\" sortable=\"true\">\r\n                <ng-template igxCell let-cell=\"cell\" let-item let-ri=\"rowIndex\" let-column=\"column\">\r\n                    <div class=\"positionTop\">\r\n                        ${{ cell.row.rowData.usdPrice | number:'0.2-2' }}\r\n                        <br />\r\n                        <span class=\"percent-style-{{ cell.row.rowData.oneDayPercentChange >= 0 ? 'up' : 'down'}}\"> {{ cell.row.rowData.oneDayPercentChange }} % </span>\r\n                    </div>\r\n\r\n                </ng-template>\r\n            </igx-column>\r\n            <igx-column width=\"100px\">\r\n                <ng-template igxHeader let-column=\"column\">\r\n                    Actions\r\n                </ng-template>\r\n                <ng-template igxCell let-item let-ri=\"rowIndex\" let-column=\"column\">\r\n                    <span igxButton=\"icon\" igxRipple (click)='deleteRow(item)' style=\"margin-top: -9px;\">\r\n                        <igx-icon name=\"highlight_off\"></igx-icon>\r\n                    </span>\r\n                </ng-template>\r\n            </igx-column>\r\n        </igx-grid>\r\n        <div class=\"sbPosition\">\r\n            <igx-snackbar #snack [autoHide]=\"true\" displayTime=\"4500\" message=\"Record was deleted\" actionText=\"Undo\" (onAction)=\"restore()\">\r\n            </igx-snackbar>\r\n        </div>\r\n        <div class=\"sbPosition\">\r\n            <igx-snackbar #snackExists [autoHide]=\"true\" displayTime=\"2500\">\r\n            </igx-snackbar>\r\n        </div>\r\n    </div>\r\n\r\n    <igx-dialog #form title=\"Add coin\" leftButtonLabel=\"Cancel\" (onLeftButtonSelect)=\"form.close()\" (onRightButtonSelect)=\"addItem($event)\"\r\n        rightButtonLabel=\"Add coin\" [closeOnOutsideSelect]=\"true\">\r\n        <form class=\"addCoinForm\">\r\n            <igx-input-group type=\"border\">\r\n                <label igxLabel for=\"coin\">Coin name</label>\r\n                <input id=\"coin\" igxInput name=\"coin\" type=\"text\" [(ngModel)]=\"newItem.coinSymbol\" />\r\n            </igx-input-group>\r\n            <br />\r\n            <igx-input-group type=\"border\">\r\n                <label igxLabel for=\"holdings\">Holdings</label>\r\n                <input igxInput name=\"holdings\" type=\"number\" [(ngModel)]=\"newItem.holdings\" />\r\n            </igx-input-group>\r\n        </form>\r\n    </igx-dialog>\r\n</div>"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.scss":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  flex: inherit; }\n\n#refreshBtn {\n  margin-bottom: 21px; }\n\n.list-sample {\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  height: 100%; }\n\nigx-icon {\n  cursor: pointer; }\n\n.item-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n\n.crypto {\n  display: flex;\n  align-items: center; }\n\n.crypto__info {\n    display: flex;\n    flex-flow: column nowrap;\n    margin-left: 24px; }\n\n.name {\n  font-weight: 600; }\n\n.phone {\n  font-size: 0.875em;\n  line-height: 1; }\n\n.search {\n  margin-bottom: 16px; }\n\n.positionTop {\n  margin-top: -7px; }\n\n.symbolPosition {\n  position: absolute;\n  margin-top: 16px;\n  margin-left: 10px; }\n\n.aStyle {\n  color: black; }\n\n.sbPosition {\n  margin-left: 100px;\n  display: flex;\n  position: fixed;\n  bottom: 0;\n  justify-content: center; }\n\n.addCoinForm {\n  padding: 12px 24px 24px; }\n\n.addCoinForm igx-input-group + igx-input-group {\n    margin-top: 24px; }\n\n#addBtn {\n  margin-left: 10px; }\n\n.sample-content {\n  padding-left: 10px;\n  display: block; }\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var igniteui_angular_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! igniteui-angular/main */ "./node_modules/igniteui-angular/main.js");
/* harmony import */ var _block_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../block-item.service */ "./src/app/block-item.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(blockItemService, router, dataService, afs) {
        this.blockItemService = blockItemService;
        this.router = router;
        this.dataService = dataService;
        this.afs = afs;
        this.blockItems = [];
        this.newItem = new _block_item_service__WEBPACK_IMPORTED_MODULE_2__["BlockItem"]();
        this.deletedItem = new _block_item_service__WEBPACK_IMPORTED_MODULE_2__["BlockItem"]();
    }
    PortfolioComponent.prototype.ngOnInit = function () { };
    // tslint:disable-next-line:use-life-cycle-interface
    PortfolioComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.blockItemsCollection = this.blockItemService.getItemsList();
        this.blockItemsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) { return actions.map(function (a) { return (__assign({ key: a.payload.key }, a.payload.val())); }); })).subscribe(function (res) {
            _this.blockItems = res;
        });
    };
    PortfolioComponent.prototype.addItem = function (event) {
        if (!this.dataService.cachedData) {
            this.dataService.getData();
        }
        // Check whether the coin is already in your portfolio
        this.checkCoinExistence(this.newItem.coinSymbol);
        event.dialog.close();
    };
    PortfolioComponent.prototype.updateItem = function (item) {
        this.blockItemService.updateItem(item.key, item);
    };
    PortfolioComponent.prototype.deleteItem = function (item) {
        this.blockItemService.deleteItem(item.key);
    };
    PortfolioComponent.prototype.selectCell = function (event) {
        this.selectedCell = event;
    };
    PortfolioComponent.prototype.restore = function () {
        this.blockItemService.createItem(this.deletedItem);
        this.snack.hide();
        this.deletedItem = new _block_item_service__WEBPACK_IMPORTED_MODULE_2__["BlockItem"]();
    };
    PortfolioComponent.prototype.checkCoinExistence = function (coin) {
        var fCoin = this.blockItems.filter(function (item) { return item.coinSymbol === coin.toUpperCase(); });
        if (fCoin.length !== 0) {
            this.snackExists.message = 'Already added!';
            this.snackExists.show();
        }
        else {
            // find coin and add it if exsist
            this.findCoin(this.newItem.coinSymbol.toUpperCase());
        }
    };
    PortfolioComponent.prototype.findCoin = function (coin) {
        var _this = this;
        this.dataService.getCryptoIdFromSymbol(coin).subscribe(function (filteredItem) {
            if (filteredItem) {
                _this.dataService.getSpecificCoinData(filteredItem['id']).subscribe(function (result) {
                    _this.newItem.coinSymbol = _this.newItem.coinSymbol.toUpperCase();
                    _this.newItem.coinName = result['name'];
                    _this.newItem.cryptoId = result['id'];
                    _this.newItem.rank = result['rank'];
                    _this.newItem.totalSupply = result['total_supply'];
                    _this.newItem.oneHourPercentChange = result['quotes.USD.percent_change_1h'];
                    _this.newItem.oneDayPercentChange = result['quotes.USD.percent_change_24h'];
                    _this.newItem.sevenDaysPercentChange = result['quotes.USD.percent_change_7d'];
                    _this.newItem.usdPrice = result['quotes.USD.price'];
                    _this.blockItemService.createItem(_this.newItem);
                    _this.newItem = new _block_item_service__WEBPACK_IMPORTED_MODULE_2__["BlockItem"]();
                    _this.snackExists.message = 'Added!';
                    _this.snackExists.show();
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                _this.snackExists.message = 'Coin does not exist!';
                _this.snackExists.show();
            }
        });
    };
    PortfolioComponent.prototype.updatePortfolio = function () {
        var _loop_1 = function (coin) {
            this_1.dataService.getSpecificCoinData(coin.cryptoId).subscribe(function (res) {
                coin.oneHourPercentChange = res['quotes.USD.percent_change_1h'];
                coin.oneDayPercentChange = res['quotes.USD.percent_change_24h'];
                coin.sevenDaysPercentChange = res['quotes.USD.percent_change_7d'];
                coin.usdPrice = res['quotes.USD.price'];
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = this.blockItems; _i < _a.length; _i++) {
            var coin = _a[_i];
            _loop_1(coin);
        }
    };
    PortfolioComponent.prototype.openChart = function (evt, symbol) {
        this.router.navigate(['/statistics', { text: 'Volatility', iconName: 'show_chart', cryptoName: symbol, daysCount: 100 }]);
    };
    PortfolioComponent.prototype.calculateHoldings = function (holdings, price) {
        return holdings * price;
    };
    PortfolioComponent.prototype.calculateTotalPortfolio = function () {
        var total = 0;
        for (var _i = 0, _a = this.blockItems; _i < _a.length; _i++) {
            var coin = _a[_i];
            total += this.calculateHoldings(coin.holdings, coin.usdPrice);
        }
        return total;
    };
    PortfolioComponent.prototype.deleteRow = function (item) {
        this.selectedRow = Object.assign({}, this.selectedCell.row);
        this.deleteItem(this.selectedCell.cell.row.rowData);
        // store deleted data
        this.deletedItem.coinName = this.selectedCell.cell.row.rowData.coinName;
        this.deletedItem.holdings = this.selectedCell.cell.row.rowData.holdings;
        this.deletedItem.cryptoId = this.selectedCell.cell.row.rowData.cryptoId;
        this.deletedItem.coinSymbol = this.selectedCell.cell.row.rowData.coinSymbol;
        this.deletedItem.rank = this.selectedCell.cell.row.rowData.rank;
        this.deletedItem.totalSupply = this.selectedCell.cell.row.rowData.totalSupply;
        this.deletedItem.oneHourPercentChange = this.selectedCell.cell.row.rowData.oneHourPercentChange;
        this.deletedItem.oneDayPercentChange = this.selectedCell.cell.row.rowData.oneDayPercentChange;
        this.deletedItem.sevenDaysPercentChange = this.selectedCell.cell.row.rowData.sevenDaysPercentChange;
        this.deletedItem.usdPrice = this.selectedCell.cell.row.rowData.usdPrice;
        this.selectedCell = {};
        this.snack.show();
    };
    PortfolioComponent.prototype.updateRow = function (obj) {
        var updatedItem = obj.row.rowData;
        updatedItem.holdings = obj.newValue;
        this.updateItem(updatedItem);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('snack'),
        __metadata("design:type", igniteui_angular_main__WEBPACK_IMPORTED_MODULE_1__["IgxSnackbarComponent"])
    ], PortfolioComponent.prototype, "snack", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('snackExists'),
        __metadata("design:type", igniteui_angular_main__WEBPACK_IMPORTED_MODULE_1__["IgxSnackbarComponent"])
    ], PortfolioComponent.prototype, "snackExists", void 0);
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/portfolio/portfolio.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_block_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/router.animations.ts":
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/*! exports provided: moveIn, fallIn, moveInLeft, flyInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveIn", function() { return moveIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fallIn", function() { return fallIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveInLeft", function() { return moveInLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flyInOut", function() { return flyInOut; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

function moveIn() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('moveIn', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0', transform: 'translateX(100px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.8s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', transform: 'translateX(0)' }))
        ]),
    ]);
}
function fallIn() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fallIn', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0', transform: 'translateY(40px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.4s .2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', transform: 'translateY(0)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', transform: 'translateX(0)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}
function moveInLeft() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('moveInLeft', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0', transform: 'translateX(-100px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.6s .2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', transform: 'translateX(0)' }))
        ])
    ]);
}
function flyInOut() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: 120, transform: 'translateX(0)', opacity: 1 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s 0.3s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'translateX(0)',
                    width: 140
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 1
                }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'translateX(50px)',
                    width: 20
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s 0.4s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 0
                }))
            ])
        ])
    ]);
}


/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\r\n  <h2>Register</h2>\r\n\r\n  <span class=\"error\" *ngIf=\"error\" [@fallIn]='state'>{{ error }}</span>\r\n\r\n  <form #formData='ngForm' (ngSubmit)=\"onSubmit(formData)\">\r\n\r\n    <igx-input-group>\r\n      <label igxLabel for=\"email\">Email address</label>\r\n      <input igxInput name=\"email\" type=\"email\" [(ngModel)]=\"email\" required />\r\n      <igx-suffix>\r\n        <igx-icon name=\"email\"></igx-icon>\r\n      </igx-suffix>\r\n    </igx-input-group>\r\n    <igx-input-group>\r\n      <label igxLabel for=\"password\">Password</label>\r\n      <input igxInput name=\"password\" type=\"password\" [(ngModel)]=\"password\" required />\r\n      <igx-suffix>\r\n        <igx-icon name=\"lock\"></igx-icon>\r\n      </igx-suffix>\r\n    </igx-input-group>\r\n    <br />\r\n    <button igxButton=\"raised\" igxRipple type=\"submit\" [disabled]=\"!formData.valid\" class=\"basic-btn\">Create my account</button>\r\n    <a igxButton=\"raised\" igxRipple routerLink=\"/login\" id=\"goback\">Go back</a>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".basic-btn {\n  margin: 5px; }\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
        this.state = '';
    }
    SignupComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (formData.valid) {
            console.log(formData.value);
            this.afAuth.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password).then(function (success) {
                console.log(success);
                _this.router.navigate(['/login']);
            }).catch(function (err) {
                console.log(err);
                _this.error = err;
            });
        }
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_3__["moveIn"])(), Object(_router_animations__WEBPACK_IMPORTED_MODULE_3__["fallIn"])()],
            host: { '[@moveIn]': '' }
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/statistics/statistics.component.css":
/*!*****************************************************!*\
  !*** ./src/app/statistics/statistics.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n\twidth: 100%;\n\tpadding: 0 24px;\n}"

/***/ }),

/***/ "./src/app/statistics/statistics.component.html":
/*!******************************************************!*\
  !*** ./src/app/statistics/statistics.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sample-wrapper\">\r\n    <!-- <div class=\"sample-content\"> -->\r\n        <span>Select a Cryptocurrency from the List </span>\r\n        <span style=\"width: 40px; display: inline-block;\">\r\n            <igx-input-group style=\"width: 100%\">\r\n                <input #input1 igxInput [(ngModel)]=\"cryptoName\" (input)=\"this.getData()\" />\r\n            </igx-input-group>\r\n        </span>\r\n\r\n        <span>to see all price changes for the past </span>\r\n        <span style=\"width: 85px; display: inline-block;\">\r\n            <igx-input-group style=\"width: 100%\">\r\n                <input #input1 igxInput [(ngModel)]=\"daysCount\" (input)=\"this.getData()\" />\r\n                <igx-suffix>\r\n                    days.\r\n                </igx-suffix>\r\n            </igx-input-group>\r\n        </span>\r\n\r\n        <igx-financial-chart [dataSource]=\"data\" height=\"400px\" width=\"100%\" style=\"margin-top: 20px;\" isToolbarVisible=\"false\" chartType=\"candle\">\r\n        </igx-financial-chart>\r\n    <!-- </div> -->\r\n</div>"

/***/ }),

/***/ "./src/app/statistics/statistics.component.ts":
/*!****************************************************!*\
  !*** ./src/app/statistics/statistics.component.ts ***!
  \****************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent(dataService, route) {
        var _this = this;
        this.dataService = dataService;
        this.route = route;
        this.route
            .paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (params) { return params.get('cryptoName') || route.routeConfig.data.cryptoName; })).subscribe(function (res) { return _this.cryptoName = res; });
        this.route
            .paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (params) { return params.get('daysCount') || route.routeConfig.data.daysCount; })).subscribe(function (res) { return _this.daysCount = res; });
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    StatisticsComponent.prototype.getData = function () {
        var _this = this;
        this.dataService.getLastSevenDaysPrices(this.cryptoName, this.daysCount)
            .subscribe(function (res) {
            _this.data = Object.assign(res).Data.map(function (item) {
                // multiply by 1000 because Date() requires miliseconds
                var dateObject = new Date(item.time * 1000);
                item.time = dateObject;
                return item;
            });
        });
    };
    StatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-statistics',
            template: __webpack_require__(/*! ./statistics.component.html */ "./src/app/statistics/statistics.component.html"),
            styles: [__webpack_require__(/*! ./statistics.component.css */ "./src/app/statistics/statistics.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "./src/assets/offlineData.ts":
/*!***********************************!*\
  !*** ./src/assets/offlineData.ts ***!
  \***********************************/
/*! exports provided: offlineData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offlineData", function() { return offlineData; });
var offlineData = [
    {
        'id': 1,
        'name': 'Bitcoin',
        'symbol': 'BTC',
        'website_slug': 'bitcoin',
        'rank': 1,
        'circulating_supply': 17025937,
        'total_supply': 17025937,
        'max_supply': 21000000,
        'quotes.USD.price': 9395.52,
        'quotes.USD.volume_24h': 6666730000,
        'quotes.USD.market_cap': 159967531602,
        'quotes.USD.percent_change_1h': 0.53,
        'quotes.USD.percent_change_24h': 1.08,
        'quotes.USD.percent_change_7d': 0.21,
        'quotes.BTC.price': 1,
        'quotes.BTC.volume_24h': 709564.7712952556,
        'quotes.BTC.market_cap': 17025937,
        'quotes.BTC.percent_change_1h': 0,
        'quotes.BTC.percent_change_24h': 0,
        'quotes.BTC.percent_change_7d': 0,
        'last_updated': 1525959572
    },
    {
        'id': 2,
        'name': 'Litecoin',
        'symbol': 'LTC',
        'website_slug': 'litecoin',
        'rank': 6,
        'circulating_supply': 56469388,
        'total_supply': 56469388,
        'max_supply': 84000000,
        'quotes.USD.price': 158.047,
        'quotes.USD.volume_24h': 410340000,
        'quotes.USD.market_cap': 8924817310,
        'quotes.USD.percent_change_1h': 0.39,
        'quotes.USD.percent_change_24h': 0.3,
        'quotes.USD.percent_change_7d': 0.97,
        'quotes.BTC.price': 0.0168215277,
        'quotes.BTC.volume_24h': 43674.0063349341,
        'quotes.BTC.market_cap': 949901,
        'quotes.BTC.percent_change_1h': 0.39,
        'quotes.BTC.percent_change_24h': 0.3,
        'quotes.BTC.percent_change_7d': 0.97,
        'last_updated': 1525959542
    },
    {
        'id': 52,
        'name': 'Ripple',
        'symbol': 'XRP',
        'website_slug': 'ripple',
        'rank': 3,
        'circulating_supply': 39178259468,
        'total_supply': 99992263539,
        'max_supply': 100000000000,
        'quotes.USD.price': 0.805734,
        'quotes.USD.volume_24h': 376369000,
        'quotes.USD.market_cap': 31567255714,
        'quotes.USD.percent_change_1h': 0.62,
        'quotes.USD.percent_change_24h': 0.18,
        'quotes.USD.percent_change_7d': -7.11,
        'quotes.BTC.price': 0.0000857573,
        'quotes.BTC.volume_24h': 40058.3469568475,
        'quotes.BTC.market_cap': 3359820,
        'quotes.BTC.percent_change_1h': 0.62,
        'quotes.BTC.percent_change_24h': 0.18,
        'quotes.BTC.percent_change_7d': -7.11,
        'last_updated': 1525959542
    },
    {
        'id': 66,
        'name': 'Nxt',
        'symbol': 'NXT',
        'website_slug': 'nxt',
        'rank': 92,
        'circulating_supply': 998999942,
        'total_supply': 998999942,
        'max_supply': 1000000000,
        'quotes.USD.price': 0.210166,
        'quotes.USD.volume_24h': 2357960,
        'quotes.USD.market_cap': 209955822,
        'quotes.USD.percent_change_1h': 0.17,
        'quotes.USD.percent_change_24h': -1.12,
        'quotes.USD.percent_change_7d': -13.51,
        'quotes.BTC.price': 0.0000223687,
        'quotes.BTC.volume_24h': 250.9664180375,
        'quotes.BTC.market_cap': 22346,
        'quotes.BTC.percent_change_1h': 0.17,
        'quotes.BTC.percent_change_24h': -1.12,
        'quotes.BTC.percent_change_7d': -13.51,
        'last_updated': 1525959541
    },
    {
        'id': 74,
        'name': 'Dogecoin',
        'symbol': 'DOGE',
        'website_slug': 'dogecoin',
        'rank': 46,
        'circulating_supply': 114376196461,
        'total_supply': 114376196461,
        'quotes.USD.price': 0.00499883,
        'quotes.USD.volume_24h': 31836700,
        'quotes.USD.market_cap': 571747162,
        'quotes.USD.percent_change_1h': 0.74,
        'quotes.USD.percent_change_24h': 0.74,
        'quotes.USD.percent_change_7d': -7.94,
        'quotes.BTC.price': 5.32e-7,
        'quotes.BTC.volume_24h': 3388.4979224141,
        'quotes.BTC.market_cap': 60853,
        'quotes.BTC.percent_change_1h': 0.74,
        'quotes.BTC.percent_change_24h': 0.74,
        'quotes.BTC.percent_change_7d': -7.94,
        'last_updated': 1525959542
    },
    {
        'id': 109,
        'name': 'DigiByte',
        'symbol': 'DGB',
        'website_slug': 'digibyte',
        'rank': 50,
        'circulating_supply': 10232179272,
        'total_supply': 10232179272,
        'max_supply': 21000000000,
        'quotes.USD.price': 0.047742,
        'quotes.USD.volume_24h': 6562960,
        'quotes.USD.market_cap': 488504703,
        'quotes.USD.percent_change_1h': 0.78,
        'quotes.USD.percent_change_24h': 0.59,
        'quotes.USD.percent_change_7d': 0.7,
        'quotes.BTC.price': 0.0000050814,
        'quotes.BTC.volume_24h': 698.5201457716,
        'quotes.BTC.market_cap': 51993,
        'quotes.BTC.percent_change_1h': 0.78,
        'quotes.BTC.percent_change_24h': 0.59,
        'quotes.BTC.percent_change_7d': 0.7,
        'last_updated': 1525959542
    },
    {
        'id': 118,
        'name': 'ReddCoin',
        'symbol': 'RDD',
        'website_slug': 'reddcoin',
        'rank': 74,
        'circulating_supply': 28808713174,
        'total_supply': 28808713174,
        'quotes.USD.price': 0.00949311,
        'quotes.USD.volume_24h': 13309900,
        'quotes.USD.market_cap': 273484283,
        'quotes.USD.percent_change_1h': -0.32,
        'quotes.USD.percent_change_24h': -0.8,
        'quotes.USD.percent_change_7d': -10.88,
        'quotes.BTC.price': 0.0000010104,
        'quotes.BTC.volume_24h': 1416.6219645107,
        'quotes.BTC.market_cap': 29108,
        'quotes.BTC.percent_change_1h': -0.32,
        'quotes.BTC.percent_change_24h': -0.8,
        'quotes.BTC.percent_change_7d': -10.88,
        'last_updated': 1525959547
    },
    {
        'id': 131,
        'name': 'Dash',
        'symbol': 'DASH',
        'website_slug': 'dash',
        'rank': 13,
        'circulating_supply': 8062942,
        'total_supply': 8062942,
        'max_supply': 18900000,
        'quotes.USD.price': 454.508,
        'quotes.USD.volume_24h': 92699700,
        'quotes.USD.market_cap': 3664671705,
        'quotes.USD.percent_change_1h': 0.2,
        'quotes.USD.percent_change_24h': 3.19,
        'quotes.USD.percent_change_7d': -7.65,
        'quotes.BTC.price': 0.0483749702,
        'quotes.BTC.volume_24h': 9866.3724839072,
        'quotes.BTC.market_cap': 390045,
        'quotes.BTC.percent_change_1h': 0.2,
        'quotes.BTC.percent_change_24h': 3.19,
        'quotes.BTC.percent_change_7d': -7.65,
        'last_updated': 1525959542
    },
    {
        'id': 213,
        'name': 'MonaCoin',
        'symbol': 'MONA',
        'website_slug': 'monacoin',
        'rank': 77,
        'circulating_supply': 59360150,
        'total_supply': 59360150,
        'quotes.USD.price': 4.47467,
        'quotes.USD.volume_24h': 2057410,
        'quotes.USD.market_cap': 265617082,
        'quotes.USD.percent_change_1h': 0.21,
        'quotes.USD.percent_change_24h': -1.13,
        'quotes.USD.percent_change_7d': -13.89,
        'quotes.BTC.price': 0.0004762557,
        'quotes.BTC.volume_24h': 218.9777681278,
        'quotes.BTC.market_cap': 28271,
        'quotes.BTC.percent_change_1h': 0.21,
        'quotes.BTC.percent_change_24h': -1.13,
        'quotes.BTC.percent_change_7d': -13.89,
        'last_updated': 1525959547
    },
    {
        'id': 328,
        'name': 'Monero',
        'symbol': 'XMR',
        'website_slug': 'monero',
        'rank': 12,
        'circulating_supply': 16016709,
        'total_supply': 16016709,
        'quotes.USD.price': 233.202,
        'quotes.USD.volume_24h': 34242000,
        'quotes.USD.market_cap': 3735128643,
        'quotes.USD.percent_change_1h': 0.42,
        'quotes.USD.percent_change_24h': 1.83,
        'quotes.USD.percent_change_7d': -6.22,
        'quotes.BTC.price': 0.0248205528,
        'quotes.BTC.volume_24h': 3644.5029120262,
        'quotes.BTC.market_cap': 397544,
        'quotes.BTC.percent_change_1h': 0.42,
        'quotes.BTC.percent_change_24h': 1.83,
        'quotes.BTC.percent_change_7d': -6.22,
        'last_updated': 1525959543
    },
    {
        'id': 463,
        'name': 'BitShares',
        'symbol': 'BTS',
        'website_slug': 'bitshares',
        'rank': 34,
        'circulating_supply': 2623190000,
        'total_supply': 2623190000,
        'max_supply': 3600570502,
        'quotes.USD.price': 0.305921,
        'quotes.USD.volume_24h': 14437100,
        'quotes.USD.market_cap': 802488908,
        'quotes.USD.percent_change_1h': 1.76,
        'quotes.USD.percent_change_24h': -0.49,
        'quotes.USD.percent_change_7d': -15.75,
        'quotes.BTC.price': 0.0000325603,
        'quotes.BTC.volume_24h': 1536.5940363067,
        'quotes.BTC.market_cap': 85412,
        'quotes.BTC.percent_change_1h': 1.76,
        'quotes.BTC.percent_change_24h': -0.49,
        'quotes.BTC.percent_change_7d': -15.75,
        'last_updated': 1525959543
    },
    {
        'id': 512,
        'name': 'Stellar',
        'symbol': 'XLM',
        'website_slug': 'stellar',
        'rank': 8,
        'circulating_supply': 18576159298,
        'total_supply': 103926681379,
        'quotes.USD.price': 0.377528,
        'quotes.USD.volume_24h': 36262000,
        'quotes.USD.market_cap': 7013020268,
        'quotes.USD.percent_change_1h': 0.53,
        'quotes.USD.percent_change_24h': -1.96,
        'quotes.USD.percent_change_7d': -13.39,
        'quotes.BTC.price': 0.0000401817,
        'quotes.BTC.volume_24h': 3859.4989952658,
        'quotes.BTC.market_cap': 746422,
        'quotes.BTC.percent_change_1h': 0.53,
        'quotes.BTC.percent_change_24h': -1.96,
        'quotes.BTC.percent_change_7d': -13.39,
        'last_updated': 1525959544
    },
    {
        'id': 541,
        'name': 'Syscoin',
        'symbol': 'SYS',
        'website_slug': 'syscoin',
        'rank': 80,
        'circulating_supply': 533453383,
        'total_supply': 533453383,
        'max_supply': 888000000,
        'quotes.USD.price': 0.491208,
        'quotes.USD.volume_24h': 4952990,
        'quotes.USD.market_cap': 262036569,
        'quotes.USD.percent_change_1h': 0.33,
        'quotes.USD.percent_change_24h': 2.84,
        'quotes.USD.percent_change_7d': -13.42,
        'quotes.BTC.price': 0.0000522811,
        'quotes.BTC.volume_24h': 527.1650744184,
        'quotes.BTC.market_cap': 27890,
        'quotes.BTC.percent_change_1h': 0.33,
        'quotes.BTC.percent_change_24h': 2.84,
        'quotes.BTC.percent_change_7d': -13.42,
        'last_updated': 1525959544
    },
    {
        'id': 693,
        'name': 'Verge',
        'symbol': 'XVG',
        'website_slug': 'verge',
        'rank': 25,
        'circulating_supply': 14978218776,
        'total_supply': 14978218776,
        'max_supply': 16555000000,
        'quotes.USD.price': 0.0749074,
        'quotes.USD.volume_24h': 82567700,
        'quotes.USD.market_cap': 1121979425,
        'quotes.USD.percent_change_1h': 0.34,
        'quotes.USD.percent_change_24h': -0.65,
        'quotes.USD.percent_change_7d': -6.61,
        'quotes.BTC.price': 0.0000079727,
        'quotes.BTC.volume_24h': 8787.9861891625,
        'quotes.BTC.market_cap': 119416,
        'quotes.BTC.percent_change_1h': 0.34,
        'quotes.BTC.percent_change_24h': -0.65,
        'quotes.BTC.percent_change_7d': -6.61,
        'last_updated': 1525959546
    },
    {
        'id': 825,
        'name': 'Tether',
        'symbol': 'USDT',
        'website_slug': 'tether',
        'rank': 17,
        'circulating_supply': 2107140814,
        'total_supply': 2580109970,
        'quotes.USD.price': 0.999404,
        'quotes.USD.volume_24h': 3053490000,
        'quotes.USD.market_cap': 2105884958,
        'quotes.USD.percent_change_1h': 0.09,
        'quotes.USD.percent_change_24h': -0.04,
        'quotes.USD.percent_change_7d': 0.16,
        'quotes.BTC.price': 0.0001063703,
        'quotes.BTC.volume_24h': 324994.252579953,
        'quotes.BTC.market_cap': 224137,
        'quotes.BTC.percent_change_1h': 0.09,
        'quotes.BTC.percent_change_24h': -0.04,
        'quotes.BTC.percent_change_7d': 0.16,
        'last_updated': 1525959547
    },
    {
        'id': 873,
        'name': 'NEM',
        'symbol': 'XEM',
        'website_slug': 'nem',
        'rank': 14,
        'circulating_supply': 8999999999,
        'total_supply': 8999999999,
        'quotes.USD.price': 0.375536,
        'quotes.USD.volume_24h': 16691100,
        'quotes.USD.market_cap': 3379824000,
        'quotes.USD.percent_change_1h': 0.42,
        'quotes.USD.percent_change_24h': -0.58,
        'quotes.USD.percent_change_7d': -11.69,
        'quotes.BTC.price': 0.0000399697,
        'quotes.BTC.volume_24h': 1776.4956064167,
        'quotes.BTC.market_cap': 359727,
        'quotes.BTC.percent_change_1h': 0.42,
        'quotes.BTC.percent_change_24h': -0.58,
        'quotes.BTC.percent_change_7d': -11.69,
        'last_updated': 1525959545
    },
    {
        'id': 1027,
        'name': 'Ethereum',
        'symbol': 'ETH',
        'website_slug': 'ethereum',
        'rank': 2,
        'circulating_supply': 99348375,
        'total_supply': 99348375,
        'quotes.USD.price': 765.465,
        'quotes.USD.volume_24h': 2683730000,
        'quotes.USD.market_cap': 76047703749,
        'quotes.USD.percent_change_1h': 0.58,
        'quotes.USD.percent_change_24h': 2.28,
        'quotes.USD.percent_change_7d': 3.49,
        'quotes.BTC.price': 0.0814712757,
        'quotes.BTC.volume_24h': 285639.3259766357,
        'quotes.BTC.market_cap': 8094039,
        'quotes.BTC.percent_change_1h': 0.58,
        'quotes.BTC.percent_change_24h': 2.28,
        'quotes.BTC.percent_change_7d': 3.49,
        'last_updated': 1525959558
    },
    {
        'id': 1042,
        'name': 'Siacoin',
        'symbol': 'SC',
        'website_slug': 'siacoin',
        'rank': 31,
        'circulating_supply': 34336528259,
        'total_supply': 34336528259,
        'quotes.USD.price': 0.0254995,
        'quotes.USD.volume_24h': 20212500,
        'quotes.USD.market_cap': 875564302,
        'quotes.USD.percent_change_1h': 0.09,
        'quotes.USD.percent_change_24h': -1.67,
        'quotes.USD.percent_change_7d': -9.47,
        'quotes.BTC.price': 0.000002714,
        'quotes.BTC.volume_24h': 2151.2912537039,
        'quotes.BTC.market_cap': 93190,
        'quotes.BTC.percent_change_1h': 0.09,
        'quotes.BTC.percent_change_24h': -1.67,
        'quotes.BTC.percent_change_7d': -9.47,
        'last_updated': 1525959546
    },
    {
        'id': 1104,
        'name': 'Augur',
        'symbol': 'REP',
        'website_slug': 'augur',
        'rank': 48,
        'circulating_supply': 11000000,
        'total_supply': 11000000,
        'quotes.USD.price': 48.9569,
        'quotes.USD.volume_24h': 17877700,
        'quotes.USD.market_cap': 538525900,
        'quotes.USD.percent_change_1h': 0.77,
        'quotes.USD.percent_change_24h': -7.59,
        'quotes.USD.percent_change_7d': 12.93,
        'quotes.BTC.price': 0.0052106642,
        'quotes.BTC.volume_24h': 1902.7898402643,
        'quotes.BTC.market_cap': 57317,
        'quotes.BTC.percent_change_1h': 0.77,
        'quotes.BTC.percent_change_24h': -7.59,
        'quotes.BTC.percent_change_7d': 12.93,
        'last_updated': 1525959547
    },
    {
        'id': 1168,
        'name': 'Decred',
        'symbol': 'DCR',
        'website_slug': 'decred',
        'rank': 43,
        'circulating_supply': 7145743,
        'total_supply': 7565743,
        'max_supply': 21000000,
        'quotes.USD.price': 87.3537,
        'quotes.USD.volume_24h': 5551500,
        'quotes.USD.market_cap': 624207083,
        'quotes.USD.percent_change_1h': 0.41,
        'quotes.USD.percent_change_24h': 2.01,
        'quotes.USD.percent_change_7d': 8.13,
        'quotes.BTC.price': 0.0092973779,
        'quotes.BTC.volume_24h': 590.8667109431,
        'quotes.BTC.market_cap': 66437,
        'quotes.BTC.percent_change_1h': 0.41,
        'quotes.BTC.percent_change_24h': 2.01,
        'quotes.BTC.percent_change_7d': 8.13,
        'last_updated': 1525959547
    },
    {
        'id': 1169,
        'name': 'PIVX',
        'symbol': 'PIVX',
        'website_slug': 'pivx',
        'rank': 70,
        'circulating_supply': 56162946,
        'total_supply': 56162946,
        'quotes.USD.price': 5.49196,
        'quotes.USD.volume_24h': 2325100,
        'quotes.USD.market_cap': 308444655,
        'quotes.USD.percent_change_1h': 0.37,
        'quotes.USD.percent_change_24h': -1.31,
        'quotes.USD.percent_change_7d': -9.01,
        'quotes.BTC.price': 0.0005845296,
        'quotes.BTC.volume_24h': 247.4690065052,
        'quotes.BTC.market_cap': 32829,
        'quotes.BTC.percent_change_1h': 0.37,
        'quotes.BTC.percent_change_24h': -1.31,
        'quotes.BTC.percent_change_7d': -9.01,
        'last_updated': 1525959547
    },
    {
        'id': 1214,
        'name': 'Lisk',
        'symbol': 'LSK',
        'website_slug': 'lisk',
        'rank': 23,
        'circulating_supply': 105741615,
        'total_supply': 120991452,
        'quotes.USD.price': 12.3162,
        'quotes.USD.volume_24h': 22025300,
        'quotes.USD.market_cap': 1302334883,
        'quotes.USD.percent_change_1h': -0.11,
        'quotes.USD.percent_change_24h': 3.63,
        'quotes.USD.percent_change_7d': -12.15,
        'quotes.BTC.price': 0.0013108588,
        'quotes.BTC.volume_24h': 2344.2342733558,
        'quotes.BTC.market_cap': 138612,
        'quotes.BTC.percent_change_1h': -0.11,
        'quotes.BTC.percent_change_24h': 3.63,
        'quotes.BTC.percent_change_7d': -12.15,
        'last_updated': 1525959548
    },
    {
        'id': 1229,
        'name': 'DigixDAO',
        'symbol': 'DGD',
        'website_slug': 'digixdao',
        'rank': 54,
        'circulating_supply': 2000000,
        'total_supply': 2000000,
        'quotes.USD.price': 228.826,
        'quotes.USD.volume_24h': 2526760,
        'quotes.USD.market_cap': 457652000,
        'quotes.USD.percent_change_1h': 0.9,
        'quotes.USD.percent_change_24h': -1.92,
        'quotes.USD.percent_change_7d': -16.86,
        'quotes.BTC.price': 0.0243547989,
        'quotes.BTC.volume_24h': 268.9324273696,
        'quotes.BTC.market_cap': 48710,
        'quotes.BTC.percent_change_1h': 0.9,
        'quotes.BTC.percent_change_24h': -1.92,
        'quotes.BTC.percent_change_7d': -16.86,
        'last_updated': 1525959548
    },
    {
        'id': 1230,
        'name': 'Steem',
        'symbol': 'STEEM',
        'website_slug': 'steem',
        'rank': 32,
        'circulating_supply': 255002183,
        'total_supply': 271976277,
        'quotes.USD.price': 3.40084,
        'quotes.USD.volume_24h': 8336220,
        'quotes.USD.market_cap': 867221623,
        'quotes.USD.percent_change_1h': 0.01,
        'quotes.USD.percent_change_24h': -2.85,
        'quotes.USD.percent_change_7d': -14.32,
        'quotes.BTC.price': 0.000361964,
        'quotes.BTC.volume_24h': 887.2547767447,
        'quotes.BTC.market_cap': 92302,
        'quotes.BTC.percent_change_1h': 0.01,
        'quotes.BTC.percent_change_24h': -2.85,
        'quotes.BTC.percent_change_7d': -14.32,
        'last_updated': 1525959548
    },
    {
        'id': 1274,
        'name': 'Waves',
        'symbol': 'WAVES',
        'website_slug': 'waves',
        'rank': 39,
        'circulating_supply': 100000000,
        'total_supply': 100000000,
        'quotes.USD.price': 6.78247,
        'quotes.USD.volume_24h': 32242500,
        'quotes.USD.market_cap': 678247000,
        'quotes.USD.percent_change_1h': 1.43,
        'quotes.USD.percent_change_24h': 4.98,
        'quotes.USD.percent_change_7d': -9.8,
        'quotes.BTC.price': 0.0007218834,
        'quotes.BTC.volume_24h': 3431.6887197303,
        'quotes.BTC.market_cap': 72188,
        'quotes.BTC.percent_change_1h': 1.43,
        'quotes.BTC.percent_change_24h': 4.98,
        'quotes.BTC.percent_change_7d': -9.8,
        'last_updated': 1525959548
    },
    {
        'id': 1320,
        'name': 'Ardor',
        'symbol': 'ARDR',
        'website_slug': 'ardor',
        'rank': 61,
        'circulating_supply': 998999495,
        'total_supply': 998999495,
        'max_supply': 998999495,
        'quotes.USD.price': 0.367437,
        'quotes.USD.volume_24h': 2444260,
        'quotes.USD.market_cap': 367069377,
        'quotes.USD.percent_change_1h': 0.77,
        'quotes.USD.percent_change_24h': 2.02,
        'quotes.USD.percent_change_7d': -15.3,
        'quotes.BTC.price': 0.0000391077,
        'quotes.BTC.volume_24h': 260.1516467423,
        'quotes.BTC.market_cap': 39069,
        'quotes.BTC.percent_change_1h': 0.77,
        'quotes.BTC.percent_change_24h': 2.02,
        'quotes.BTC.percent_change_7d': -15.3,
        'last_updated': 1525959549
    },
    {
        'id': 1321,
        'name': 'Ethereum Classic',
        'symbol': 'ETC',
        'website_slug': 'ethereum-classic',
        'rank': 16,
        'circulating_supply': 101617423,
        'total_supply': 101617423,
        'quotes.USD.price': 21.6327,
        'quotes.USD.volume_24h': 209703000,
        'quotes.USD.market_cap': 2198259227,
        'quotes.USD.percent_change_1h': 0.44,
        'quotes.USD.percent_change_24h': 0.34,
        'quotes.USD.percent_change_7d': -3.67,
        'quotes.BTC.price': 0.0023024484,
        'quotes.BTC.volume_24h': 22319.4671503014,
        'quotes.BTC.market_cap': 233969,
        'quotes.BTC.percent_change_1h': 0.44,
        'quotes.BTC.percent_change_24h': 0.34,
        'quotes.BTC.percent_change_7d': -3.67,
        'last_updated': 1525959549
    },
    {
        'id': 1343,
        'name': 'Stratis',
        'symbol': 'STRAT',
        'website_slug': 'stratis',
        'rank': 37,
        'circulating_supply': 98849905,
        'total_supply': 98849905,
        'quotes.USD.price': 7.0794,
        'quotes.USD.volume_24h': 13008600,
        'quotes.USD.market_cap': 699798019,
        'quotes.USD.percent_change_1h': -0.94,
        'quotes.USD.percent_change_24h': -3.42,
        'quotes.USD.percent_change_7d': -7.64,
        'quotes.BTC.price': 0.0007534868,
        'quotes.BTC.volume_24h': 1384.5534893226,
        'quotes.BTC.market_cap': 74482,
        'quotes.BTC.percent_change_1h': -0.94,
        'quotes.BTC.percent_change_24h': -3.42,
        'quotes.BTC.percent_change_7d': -7.64,
        'last_updated': 1525959548
    },
    {
        'id': 1376,
        'name': 'NEO',
        'symbol': 'NEO',
        'website_slug': 'neo',
        'rank': 11,
        'circulating_supply': 65000000,
        'total_supply': 100000000,
        'max_supply': 100000000,
        'quotes.USD.price': 75.9669,
        'quotes.USD.volume_24h': 111202000,
        'quotes.USD.market_cap': 4937848500,
        'quotes.USD.percent_change_1h': 0.68,
        'quotes.USD.percent_change_24h': -0.11,
        'quotes.USD.percent_change_7d': -11.79,
        'quotes.BTC.price': 0.0080854386,
        'quotes.BTC.volume_24h': 11835.6408160485,
        'quotes.BTC.market_cap': 525554,
        'quotes.BTC.percent_change_1h': 0.68,
        'quotes.BTC.percent_change_24h': -0.11,
        'quotes.BTC.percent_change_7d': -11.79,
        'last_updated': 1525959551
    },
    {
        'id': 1437,
        'name': 'Zcash',
        'symbol': 'ZEC',
        'website_slug': 'zcash',
        'rank': 27,
        'circulating_supply': 3885556,
        'total_supply': 3885556,
        'quotes.USD.price': 280.883,
        'quotes.USD.volume_24h': 53374000,
        'quotes.USD.market_cap': 1091386696,
        'quotes.USD.percent_change_1h': 0.17,
        'quotes.USD.percent_change_24h': 2.29,
        'quotes.USD.percent_change_7d': -7.22,
        'quotes.BTC.price': 0.0298954182,
        'quotes.BTC.volume_24h': 5680.7925479377,
        'quotes.BTC.market_cap': 116160,
        'quotes.BTC.percent_change_1h': 0.17,
        'quotes.BTC.percent_change_24h': 2.29,
        'quotes.BTC.percent_change_7d': -7.22,
        'last_updated': 1525959549
    },
    {
        'id': 1455,
        'name': 'Golem',
        'symbol': 'GNT',
        'website_slug': 'golem-network-tokens',
        'rank': 45,
        'circulating_supply': 834262000,
        'total_supply': 1000000000,
        'quotes.USD.price': 0.695396,
        'quotes.USD.volume_24h': 23335300,
        'quotes.USD.market_cap': 580142458,
        'quotes.USD.percent_change_1h': 0.2,
        'quotes.USD.percent_change_24h': -3.12,
        'quotes.USD.percent_change_7d': -16.54,
        'quotes.BTC.price': 0.0000740136,
        'quotes.BTC.volume_24h': 2483.6624263479,
        'quotes.BTC.market_cap': 61747,
        'quotes.BTC.percent_change_1h': 0.2,
        'quotes.BTC.percent_change_24h': -3.12,
        'quotes.BTC.percent_change_7d': -16.54,
        'last_updated': 1525959550
    },
    {
        'id': 1518,
        'name': 'Maker',
        'symbol': 'MKR',
        'website_slug': 'maker',
        'rank': 40,
        'circulating_supply': 618228,
        'total_supply': 1000000,
        'quotes.USD.price': 1079.04,
        'quotes.USD.volume_24h': 1358940,
        'quotes.USD.market_cap': 667092493,
        'quotes.USD.percent_change_1h': -0.01,
        'quotes.USD.percent_change_24h': 5.79,
        'quotes.USD.percent_change_7d': -1.54,
        'quotes.BTC.price': 0.1148462246,
        'quotes.BTC.volume_24h': 144.6370184939,
        'quotes.BTC.market_cap': 71001,
        'quotes.BTC.percent_change_1h': -0.01,
        'quotes.BTC.percent_change_24h': 5.79,
        'quotes.BTC.percent_change_7d': -1.54,
        'last_updated': 1525959555
    },
    {
        'id': 1521,
        'name': 'Komodo',
        'symbol': 'KMD',
        'website_slug': 'komodo',
        'rank': 62,
        'circulating_supply': 104059367,
        'total_supply': 104059367,
        'quotes.USD.price': 3.52224,
        'quotes.USD.volume_24h': 2954990,
        'quotes.USD.market_cap': 366522067,
        'quotes.USD.percent_change_1h': 0.65,
        'quotes.USD.percent_change_24h': 1.77,
        'quotes.USD.percent_change_7d': -16.38,
        'quotes.BTC.price': 0.0003748851,
        'quotes.BTC.volume_24h': 314.5105326794,
        'quotes.BTC.market_cap': 39010,
        'quotes.BTC.percent_change_1h': 0.65,
        'quotes.BTC.percent_change_24h': 1.77,
        'quotes.BTC.percent_change_7d': -16.38,
        'last_updated': 1525959550
    },
    {
        'id': 1567,
        'name': 'Nano',
        'symbol': 'NANO',
        'website_slug': 'nano',
        'rank': 28,
        'circulating_supply': 133248289,
        'total_supply': 133248289,
        'max_supply': 133248290,
        'quotes.USD.price': 7.73502,
        'quotes.USD.volume_24h': 22009000,
        'quotes.USD.market_cap': 1030678182,
        'quotes.USD.percent_change_1h': -0.84,
        'quotes.USD.percent_change_24h': -1.84,
        'quotes.USD.percent_change_7d': -18.19,
        'quotes.BTC.price': 0.0008232668,
        'quotes.BTC.volume_24h': 2342.4994039713,
        'quotes.BTC.market_cap': 109699,
        'quotes.BTC.percent_change_1h': -0.84,
        'quotes.BTC.percent_change_24h': -1.84,
        'quotes.BTC.percent_change_7d': -18.19,
        'last_updated': 1525959550
    },
    {
        'id': 1586,
        'name': 'Ark',
        'symbol': 'ARK',
        'website_slug': 'ark',
        'rank': 64,
        'circulating_supply': 102454190,
        'total_supply': 133704190,
        'quotes.USD.price': 3.27081,
        'quotes.USD.volume_24h': 2002160,
        'quotes.USD.market_cap': 335108189,
        'quotes.USD.percent_change_1h': -0.28,
        'quotes.USD.percent_change_24h': -0.87,
        'quotes.USD.percent_change_7d': -12.03,
        'quotes.BTC.price': 0.0003481244,
        'quotes.BTC.volume_24h': 213.0973059501,
        'quotes.BTC.market_cap': 35667,
        'quotes.BTC.percent_change_1h': -0.28,
        'quotes.BTC.percent_change_24h': -0.87,
        'quotes.BTC.percent_change_7d': -12.03,
        'last_updated': 1525959550
    },
    {
        'id': 1619,
        'name': 'Skycoin',
        'symbol': 'SKY',
        'website_slug': 'skycoin',
        'rank': 85,
        'circulating_supply': 8739174,
        'total_supply': 25000000,
        'max_supply': 100000000,
        'quotes.USD.price': 26.44,
        'quotes.USD.volume_24h': 2355990,
        'quotes.USD.market_cap': 231063761,
        'quotes.USD.percent_change_1h': -1.79,
        'quotes.USD.percent_change_24h': 12.08,
        'quotes.USD.percent_change_7d': 35.89,
        'quotes.BTC.price': 0.0028141071,
        'quotes.BTC.volume_24h': 250.7567436395,
        'quotes.BTC.market_cap': 24593,
        'quotes.BTC.percent_change_1h': -1.79,
        'quotes.BTC.percent_change_24h': 12.08,
        'quotes.BTC.percent_change_7d': 35.89,
        'last_updated': 1525959551
    },
    {
        'id': 1684,
        'name': 'Qtum',
        'symbol': 'QTUM',
        'website_slug': 'qtum',
        'rank': 18,
        'circulating_supply': 88584760,
        'total_supply': 100584760,
        'quotes.USD.price': 20.0481,
        'quotes.USD.volume_24h': 153130000,
        'quotes.USD.market_cap': 1775956127,
        'quotes.USD.percent_change_1h': 0.46,
        'quotes.USD.percent_change_24h': -0.81,
        'quotes.USD.percent_change_7d': -10.94,
        'quotes.BTC.price': 0.0021337936,
        'quotes.BTC.volume_24h': 16298.1931814312,
        'quotes.BTC.market_cap': 189022,
        'quotes.BTC.percent_change_1h': 0.46,
        'quotes.BTC.percent_change_24h': -0.81,
        'quotes.BTC.percent_change_7d': -10.94,
        'last_updated': 1525959552
    },
    {
        'id': 1697,
        'name': 'Basic Attention Token',
        'symbol': 'BAT',
        'website_slug': 'basic-attention-token',
        'rank': 59,
        'circulating_supply': 1000000000,
        'total_supply': 1500000000,
        'quotes.USD.price': 0.3844,
        'quotes.USD.volume_24h': 5814560,
        'quotes.USD.market_cap': 384400000,
        'quotes.USD.percent_change_1h': 0.43,
        'quotes.USD.percent_change_24h': 2.01,
        'quotes.USD.percent_change_7d': -23.32,
        'quotes.BTC.price': 0.0000409131,
        'quotes.BTC.volume_24h': 618.8651612683,
        'quotes.BTC.market_cap': 40913,
        'quotes.BTC.percent_change_1h': 0.43,
        'quotes.BTC.percent_change_24h': 2.01,
        'quotes.BTC.percent_change_7d': -23.32,
        'last_updated': 1525959552
    },
    {
        'id': 1700,
        'name': 'Aeternity',
        'symbol': 'AE',
        'website_slug': 'aeternity',
        'rank': 26,
        'circulating_supply': 233020472,
        'total_supply': 273685830,
        'quotes.USD.price': 4.70968,
        'quotes.USD.volume_24h': 42675000,
        'quotes.USD.market_cap': 1097451857,
        'quotes.USD.percent_change_1h': 0.93,
        'quotes.USD.percent_change_24h': 4.41,
        'quotes.USD.percent_change_7d': 2.38,
        'quotes.BTC.price': 0.0005012687,
        'quotes.BTC.volume_24h': 4542.0583426995,
        'quotes.BTC.market_cap': 116806,
        'quotes.BTC.percent_change_1h': 0.93,
        'quotes.BTC.percent_change_24h': 4.41,
        'quotes.BTC.percent_change_7d': 2.38,
        'last_updated': 1525959552
    },
    {
        'id': 1710,
        'name': 'Veritaseum',
        'symbol': 'VERI',
        'website_slug': 'veritaseum',
        'rank': 93,
        'circulating_supply': 2036645,
        'total_supply': 100000000,
        'quotes.USD.price': 100.553,
        'quotes.USD.volume_24h': 582160,
        'quotes.USD.market_cap': 204790809,
        'quotes.USD.percent_change_1h': -1.19,
        'quotes.USD.percent_change_24h': 0.66,
        'quotes.USD.percent_change_7d': -23.95,
        'quotes.BTC.price': 0.0107022283,
        'quotes.BTC.volume_24h': 61.9614454549,
        'quotes.BTC.market_cap': 21797,
        'quotes.BTC.percent_change_1h': -1.19,
        'quotes.BTC.percent_change_24h': 0.66,
        'quotes.BTC.percent_change_7d': -23.95,
        'last_updated': 1525959552
    },
    {
        'id': 1720,
        'name': 'IOTA',
        'symbol': 'MIOTA',
        'website_slug': 'iota',
        'rank': 9,
        'circulating_supply': 2779530283,
        'total_supply': 2779530283,
        'max_supply': 2779530283,
        'quotes.USD.price': 2.27662,
        'quotes.USD.volume_24h': 83189900,
        'quotes.USD.market_cap': 6327934233,
        'quotes.USD.percent_change_1h': -0.03,
        'quotes.USD.percent_change_24h': -3.22,
        'quotes.USD.percent_change_7d': -7.22,
        'quotes.BTC.price': 0.0002423091,
        'quotes.BTC.volume_24h': 8854.2092401485,
        'quotes.BTC.market_cap': 673505,
        'quotes.BTC.percent_change_1h': -0.03,
        'quotes.BTC.percent_change_24h': -3.22,
        'quotes.BTC.percent_change_7d': -7.22,
        'last_updated': 1525959552
    },
    {
        'id': 1727,
        'name': 'Bancor',
        'symbol': 'BNT',
        'website_slug': 'bancor',
        'rank': 78,
        'circulating_supply': 51610074,
        'total_supply': 75902028,
        'quotes.USD.price': 5.13411,
        'quotes.USD.volume_24h': 20076100,
        'quotes.USD.market_cap': 264971796,
        'quotes.USD.percent_change_1h': 0.41,
        'quotes.USD.percent_change_24h': 3.27,
        'quotes.USD.percent_change_7d': 3.35,
        'quotes.BTC.price': 0.0005464423,
        'quotes.BTC.volume_24h': 2136.7736964,
        'quotes.BTC.market_cap': 28202,
        'quotes.BTC.percent_change_1h': 0.41,
        'quotes.BTC.percent_change_24h': 3.27,
        'quotes.BTC.percent_change_7d': 3.35,
        'last_updated': 1525959553
    },
    {
        'id': 1750,
        'name': 'GXChain',
        'symbol': 'GXS',
        'website_slug': 'gxchain',
        'rank': 81,
        'circulating_supply': 60000000,
        'total_supply': 100000000,
        'max_supply': 100000000,
        'quotes.USD.price': 4.35505,
        'quotes.USD.volume_24h': 19964900,
        'quotes.USD.market_cap': 261303000,
        'quotes.USD.percent_change_1h': 0.25,
        'quotes.USD.percent_change_24h': 12.69,
        'quotes.USD.percent_change_7d': -0.75,
        'quotes.BTC.price': 0.0004635241,
        'quotes.BTC.volume_24h': 2124.9382684513,
        'quotes.BTC.market_cap': 27811,
        'quotes.BTC.percent_change_1h': 0.25,
        'quotes.BTC.percent_change_24h': 12.69,
        'quotes.BTC.percent_change_7d': -0.75,
        'last_updated': 1525959553
    },
    {
        'id': 1757,
        'name': 'FunFair',
        'symbol': 'FUN',
        'website_slug': 'funfair',
        'rank': 73,
        'circulating_supply': 4858654389,
        'total_supply': 10999873621,
        'quotes.USD.price': 0.0571294,
        'quotes.USD.volume_24h': 9900680,
        'quotes.USD.market_cap': 277572010,
        'quotes.USD.percent_change_1h': 0.44,
        'quotes.USD.percent_change_24h': 5.7,
        'quotes.USD.percent_change_7d': 7.94,
        'quotes.BTC.price': 0.0000060805,
        'quotes.BTC.volume_24h': 1053.7660502026,
        'quotes.BTC.market_cap': 29543,
        'quotes.BTC.percent_change_1h': 0.44,
        'quotes.BTC.percent_change_24h': 5.7,
        'quotes.BTC.percent_change_7d': 7.94,
        'last_updated': 1525959553
    },
    {
        'id': 1759,
        'name': 'Status',
        'symbol': 'SNT',
        'website_slug': 'status',
        'rank': 47,
        'circulating_supply': 3470483788,
        'total_supply': 6804870174,
        'quotes.USD.price': 0.157027,
        'quotes.USD.volume_24h': 37478600,
        'quotes.USD.market_cap': 544959658,
        'quotes.USD.percent_change_1h': -0.31,
        'quotes.USD.percent_change_24h': 0.78,
        'quotes.USD.percent_change_7d': -5.11,
        'quotes.BTC.price': 0.000016713,
        'quotes.BTC.volume_24h': 3988.9862402507,
        'quotes.BTC.market_cap': 58002,
        'quotes.BTC.percent_change_1h': -0.31,
        'quotes.BTC.percent_change_24h': 0.78,
        'quotes.BTC.percent_change_7d': -5.11,
        'last_updated': 1525959553
    },
    {
        'id': 1765,
        'name': 'EOS',
        'symbol': 'EOS',
        'website_slug': 'eos',
        'rank': 5,
        'circulating_supply': 846909223,
        'total_supply': 900000000,
        'max_supply': 1000000000,
        'quotes.USD.price': 18.6412,
        'quotes.USD.volume_24h': 1060340000,
        'quotes.USD.market_cap': 15787404209,
        'quotes.USD.percent_change_1h': 2.87,
        'quotes.USD.percent_change_24h': 3.92,
        'quotes.USD.percent_change_7d': 4.17,
        'quotes.BTC.price': 0.001984052,
        'quotes.BTC.volume_24h': 112855.9143080958,
        'quotes.BTC.market_cap': 1680312,
        'quotes.BTC.percent_change_1h': 2.87,
        'quotes.BTC.percent_change_24h': 3.92,
        'quotes.BTC.percent_change_7d': 4.17,
        'last_updated': 1525959554
    },
    {
        'id': 1785,
        'name': 'Gas',
        'symbol': 'GAS',
        'website_slug': 'gas',
        'rank': 67,
        'circulating_supply': 10128375,
        'total_supply': 17190378,
        'max_supply': 100000000,
        'quotes.USD.price': 31.8588,
        'quotes.USD.volume_24h': 10942400,
        'quotes.USD.market_cap': 322677877,
        'quotes.USD.percent_change_1h': 0.26,
        'quotes.USD.percent_change_24h': -1.85,
        'quotes.USD.percent_change_7d': 0.54,
        'quotes.BTC.price': 0.0033908501,
        'quotes.BTC.volume_24h': 1164.6401689316,
        'quotes.BTC.market_cap': 34344,
        'quotes.BTC.percent_change_1h': 0.26,
        'quotes.BTC.percent_change_24h': -1.85,
        'quotes.BTC.percent_change_7d': 0.54,
        'last_updated': 1525959553
    },
    {
        'id': 1789,
        'name': 'Populous',
        'symbol': 'PPT',
        'website_slug': 'populous',
        'rank': 38,
        'circulating_supply': 37004027,
        'total_supply': 53252246,
        'max_supply': 53252246,
        'quotes.USD.price': 18.4866,
        'quotes.USD.volume_24h': 10530500,
        'quotes.USD.market_cap': 684078644,
        'quotes.USD.percent_change_1h': -0.16,
        'quotes.USD.percent_change_24h': -5.91,
        'quotes.USD.percent_change_7d': -21.53,
        'quotes.BTC.price': 0.0019675973,
        'quotes.BTC.volume_24h': 1120.8001260175,
        'quotes.BTC.market_cap': 72809,
        'quotes.BTC.percent_change_1h': -0.16,
        'quotes.BTC.percent_change_24h': -5.91,
        'quotes.BTC.percent_change_7d': -21.53,
        'last_updated': 1525959553
    },
    {
        'id': 1808,
        'name': 'OmiseGO',
        'symbol': 'OMG',
        'website_slug': 'omisego',
        'rank': 19,
        'circulating_supply': 102042552,
        'total_supply': 140245398,
        'quotes.USD.price': 16.1189,
        'quotes.USD.volume_24h': 47569900,
        'quotes.USD.market_cap': 1644813688,
        'quotes.USD.percent_change_1h': -0.03,
        'quotes.USD.percent_change_24h': 0.07,
        'quotes.USD.percent_change_7d': -11.89,
        'quotes.BTC.price': 0.0017155942,
        'quotes.BTC.volume_24h': 5063.0406832192,
        'quotes.BTC.market_cap': 175064,
        'quotes.BTC.percent_change_1h': -0.03,
        'quotes.BTC.percent_change_24h': 0.07,
        'quotes.BTC.percent_change_7d': -11.89,
        'last_updated': 1525959554
    },
    {
        'id': 1817,
        'name': 'Ethos',
        'symbol': 'ETHOS',
        'website_slug': 'ethos',
        'rank': 69,
        'circulating_supply': 76496756,
        'total_supply': 222295208,
        'quotes.USD.price': 4.11,
        'quotes.USD.volume_24h': 51644200,
        'quotes.USD.market_cap': 314401665,
        'quotes.USD.percent_change_1h': 0.96,
        'quotes.USD.percent_change_24h': -4.53,
        'quotes.USD.percent_change_7d': 15.14,
        'quotes.BTC.price': 0.0004374425,
        'quotes.BTC.volume_24h': 5496.6835257655,
        'quotes.BTC.market_cap': 33463,
        'quotes.BTC.percent_change_1h': 0.96,
        'quotes.BTC.percent_change_24h': -4.53,
        'quotes.BTC.percent_change_7d': 15.14,
        'last_updated': 1525959556
    },
    {
        'id': 1831,
        'name': 'Bitcoin Cash',
        'symbol': 'BCH',
        'website_slug': 'bitcoin-cash',
        'rank': 4,
        'circulating_supply': 17120113,
        'total_supply': 17120113,
        'max_supply': 21000000,
        'quotes.USD.price': 1662.52,
        'quotes.USD.volume_24h': 1137080000,
        'quotes.USD.market_cap': 28462529434,
        'quotes.USD.percent_change_1h': 0.73,
        'quotes.USD.percent_change_24h': 5.92,
        'quotes.USD.percent_change_7d': 11.11,
        'quotes.BTC.price': 0.1769481625,
        'quotes.BTC.volume_24h': 121023.6367971118,
        'quotes.BTC.market_cap': 3029372,
        'quotes.BTC.percent_change_1h': 0.73,
        'quotes.BTC.percent_change_24h': 5.92,
        'quotes.BTC.percent_change_7d': 11.11,
        'last_updated': 1525959554
    },
    {
        'id': 1839,
        'name': 'Binance Coin',
        'symbol': 'BNB',
        'website_slug': 'binance-coin',
        'rank': 21,
        'circulating_supply': 114041290,
        'total_supply': 194972068,
        'quotes.USD.price': 14.344,
        'quotes.USD.volume_24h': 101085000,
        'quotes.USD.market_cap': 1635808265,
        'quotes.USD.percent_change_1h': 1.13,
        'quotes.USD.percent_change_24h': 2.89,
        'quotes.USD.percent_change_7d': -0.5,
        'quotes.BTC.price': 0.0015266851,
        'quotes.BTC.volume_24h': 10758.8510268724,
        'quotes.BTC.market_cap': 174105,
        'quotes.BTC.percent_change_1h': 1.13,
        'quotes.BTC.percent_change_24h': 2.89,
        'quotes.BTC.percent_change_7d': -0.5,
        'last_updated': 1525959554
    },
    {
        'id': 1866,
        'name': 'Bytom',
        'symbol': 'BTM',
        'website_slug': 'bytom',
        'rank': 35,
        'circulating_supply': 987000000,
        'total_supply': 1407000000,
        'quotes.USD.price': 0.781271,
        'quotes.USD.volume_24h': 66008000,
        'quotes.USD.market_cap': 771114477,
        'quotes.USD.percent_change_1h': 1.07,
        'quotes.USD.percent_change_24h': -0.6,
        'quotes.USD.percent_change_7d': -17.02,
        'quotes.BTC.price': 0.0000831536,
        'quotes.BTC.volume_24h': 7025.4759715269,
        'quotes.BTC.market_cap': 82073,
        'quotes.BTC.percent_change_1h': 1.07,
        'quotes.BTC.percent_change_24h': -0.6,
        'quotes.BTC.percent_change_7d': -17.02,
        'last_updated': 1525959554
    },
    {
        'id': 1876,
        'name': 'Dentacoin',
        'symbol': 'DCN',
        'website_slug': 'dentacoin',
        'rank': 55,
        'circulating_supply': 325226613094,
        'total_supply': 1963173416169,
        'max_supply': 8000000000000,
        'quotes.USD.price': 0.00133026,
        'quotes.USD.volume_24h': 5416500,
        'quotes.USD.market_cap': 432635954,
        'quotes.USD.percent_change_1h': 4.62,
        'quotes.USD.percent_change_24h': 42.7,
        'quotes.USD.percent_change_7d': 77.46,
        'quotes.BTC.price': 1.416e-7,
        'quotes.BTC.volume_24h': 576.4981608256,
        'quotes.BTC.market_cap': 46047,
        'quotes.BTC.percent_change_1h': 4.62,
        'quotes.BTC.percent_change_24h': 42.7,
        'quotes.BTC.percent_change_7d': 77.46,
        'last_updated': 1525959555
    },
    {
        'id': 1896,
        'name': '0x',
        'symbol': 'ZRX',
        'website_slug': '0x',
        'rank': 30,
        'circulating_supply': 527845645,
        'total_supply': 1000000000,
        'quotes.USD.price': 1.87853,
        'quotes.USD.volume_24h': 55581300,
        'quotes.USD.market_cap': 991573880,
        'quotes.USD.percent_change_1h': 0.49,
        'quotes.USD.percent_change_24h': 9.71,
        'quotes.USD.percent_change_7d': 32.16,
        'quotes.BTC.price': 0.0001999389,
        'quotes.BTC.volume_24h': 5915.7236640441,
        'quotes.BTC.market_cap': 105537,
        'quotes.BTC.percent_change_1h': 0.49,
        'quotes.BTC.percent_change_24h': 9.71,
        'quotes.BTC.percent_change_7d': 32.16,
        'last_updated': 1525959555
    },
    {
        'id': 1903,
        'name': 'Hshare',
        'symbol': 'HSR',
        'website_slug': 'hshare',
        'rank': 49,
        'circulating_supply': 42966786,
        'total_supply': 42966786,
        'max_supply': 84000000,
        'quotes.USD.price': 11.6004,
        'quotes.USD.volume_24h': 62928900,
        'quotes.USD.market_cap': 498431899,
        'quotes.USD.percent_change_1h': 0.65,
        'quotes.USD.percent_change_24h': -0.14,
        'quotes.USD.percent_change_7d': -18.59,
        'quotes.BTC.price': 0.0012346735,
        'quotes.BTC.volume_24h': 6697.7559517728,
        'quotes.BTC.market_cap': 53050,
        'quotes.BTC.percent_change_1h': 0.65,
        'quotes.BTC.percent_change_24h': -0.14,
        'quotes.BTC.percent_change_7d': -18.59,
        'last_updated': 1525959555
    },
    {
        'id': 1904,
        'name': 'VeChain',
        'symbol': 'VEN',
        'website_slug': 'vechain',
        'rank': 15,
        'circulating_supply': 525899138,
        'total_supply': 873378637,
        'quotes.USD.price': 5.37628,
        'quotes.USD.volume_24h': 131622000,
        'quotes.USD.market_cap': 2827381016,
        'quotes.USD.percent_change_1h': 1.27,
        'quotes.USD.percent_change_24h': 6.93,
        'quotes.USD.percent_change_7d': 3.25,
        'quotes.BTC.price': 0.0005722174,
        'quotes.BTC.volume_24h': 14009.0170634515,
        'quotes.BTC.market_cap': 300929,
        'quotes.BTC.percent_change_1h': 1.27,
        'quotes.BTC.percent_change_24h': 6.93,
        'quotes.BTC.percent_change_7d': 3.25,
        'last_updated': 1525959555
    },
    {
        'id': 1908,
        'name': 'Nebulas',
        'symbol': 'NAS',
        'website_slug': 'nebulas-token',
        'rank': 56,
        'circulating_supply': 45500000,
        'total_supply': 100000000,
        'max_supply': 100000000,
        'quotes.USD.price': 9.46654,
        'quotes.USD.volume_24h': 36855400,
        'quotes.USD.market_cap': 430727570,
        'quotes.USD.percent_change_1h': 3.18,
        'quotes.USD.percent_change_24h': 0.15,
        'quotes.USD.percent_change_7d': -18.02,
        'quotes.BTC.price': 0.0010075589,
        'quotes.BTC.volume_24h': 3922.6567555601,
        'quotes.BTC.market_cap': 45844,
        'quotes.BTC.percent_change_1h': 3.18,
        'quotes.BTC.percent_change_24h': 0.15,
        'quotes.BTC.percent_change_7d': -18.02,
        'last_updated': 1525959555
    },
    {
        'id': 1925,
        'name': 'Waltonchain',
        'symbol': 'WTC',
        'website_slug': 'waltonchain',
        'rank': 51,
        'circulating_supply': 31144099,
        'total_supply': 70000000,
        'max_supply': 100000000,
        'quotes.USD.price': 14.9176,
        'quotes.USD.volume_24h': 11236100,
        'quotes.USD.market_cap': 464595217,
        'quotes.USD.percent_change_1h': 0.34,
        'quotes.USD.percent_change_24h': -0.08,
        'quotes.USD.percent_change_7d': -12.06,
        'quotes.BTC.price': 0.0015877354,
        'quotes.BTC.volume_24h': 1195.899747965,
        'quotes.BTC.market_cap': 49449,
        'quotes.BTC.percent_change_1h': 0.34,
        'quotes.BTC.percent_change_24h': -0.08,
        'quotes.BTC.percent_change_7d': -12.06,
        'last_updated': 1525959555
    },
    {
        'id': 1934,
        'name': 'Loopring',
        'symbol': 'LRC',
        'website_slug': 'loopring',
        'rank': 53,
        'circulating_supply': 572074043,
        'total_supply': 1374956262,
        'quotes.USD.price': 0.810461,
        'quotes.USD.volume_24h': 20727600,
        'quotes.USD.market_cap': 463643701,
        'quotes.USD.percent_change_1h': -0.06,
        'quotes.USD.percent_change_24h': -0.8,
        'quotes.USD.percent_change_7d': -13.21,
        'quotes.BTC.price': 0.0000862604,
        'quotes.BTC.volume_24h': 2206.11525493,
        'quotes.BTC.market_cap': 49347,
        'quotes.BTC.percent_change_1h': -0.06,
        'quotes.BTC.percent_change_24h': -0.8,
        'quotes.BTC.percent_change_7d': -13.21,
        'last_updated': 1525959556
    },
    {
        'id': 1955,
        'name': 'Neblio',
        'symbol': 'NEBL',
        'website_slug': 'neblio',
        'rank': 95,
        'circulating_supply': 13082609,
        'total_supply': 13844890,
        'quotes.USD.price': 15.3869,
        'quotes.USD.volume_24h': 10336400,
        'quotes.USD.market_cap': 201300799,
        'quotes.USD.percent_change_1h': 1.44,
        'quotes.USD.percent_change_24h': 5.53,
        'quotes.USD.percent_change_7d': -1.92,
        'quotes.BTC.price': 0.0016376848,
        'quotes.BTC.volume_24h': 1100.1413439597,
        'quotes.BTC.market_cap': 21425,
        'quotes.BTC.percent_change_1h': 1.44,
        'quotes.BTC.percent_change_24h': 5.53,
        'quotes.BTC.percent_change_7d': -1.92,
        'last_updated': 1525959556
    },
    {
        'id': 1958,
        'name': 'TRON',
        'symbol': 'TRX',
        'website_slug': 'tron',
        'rank': 10,
        'circulating_supply': 65748111645,
        'total_supply': 100000000000,
        'quotes.USD.price': 0.080687,
        'quotes.USD.volume_24h': 299007000,
        'quotes.USD.market_cap': 5305017884,
        'quotes.USD.percent_change_1h': 0.59,
        'quotes.USD.percent_change_24h': -1.21,
        'quotes.USD.percent_change_7d': -7.83,
        'quotes.BTC.price': 0.0000085878,
        'quotes.BTC.volume_24h': 31824.4227035864,
        'quotes.BTC.market_cap': 564633,
        'quotes.BTC.percent_change_1h': 0.59,
        'quotes.BTC.percent_change_24h': -1.21,
        'quotes.BTC.percent_change_7d': -7.83,
        'last_updated': 1525959555
    },
    {
        'id': 1975,
        'name': 'ChainLink',
        'symbol': 'LINK',
        'website_slug': 'chainlink',
        'rank': 96,
        'circulating_supply': 350000000,
        'total_supply': 1000000000,
        'quotes.USD.price': 0.572062,
        'quotes.USD.volume_24h': 7885770,
        'quotes.USD.market_cap': 200221700,
        'quotes.USD.percent_change_1h': 1.22,
        'quotes.USD.percent_change_24h': 3.23,
        'quotes.USD.percent_change_7d': 1.46,
        'quotes.BTC.price': 0.0000608867,
        'quotes.BTC.volume_24h': 839.3117145193,
        'quotes.BTC.market_cap': 21310,
        'quotes.BTC.percent_change_1h': 1.22,
        'quotes.BTC.percent_change_24h': 3.23,
        'quotes.BTC.percent_change_7d': 1.46,
        'last_updated': 1525959555
    },
    {
        'id': 1982,
        'name': 'Kyber Network',
        'symbol': 'KNC',
        'website_slug': 'kyber-network',
        'rank': 66,
        'circulating_supply': 134132697,
        'total_supply': 215625349,
        'quotes.USD.price': 2.43591,
        'quotes.USD.volume_24h': 58360900,
        'quotes.USD.market_cap': 326735178,
        'quotes.USD.percent_change_1h': 0.76,
        'quotes.USD.percent_change_24h': 9.58,
        'quotes.USD.percent_change_7d': -5.65,
        'quotes.BTC.price': 0.0002592629,
        'quotes.BTC.volume_24h': 6211.5667892783,
        'quotes.BTC.market_cap': 34776,
        'quotes.BTC.percent_change_1h': 0.76,
        'quotes.BTC.percent_change_24h': 9.58,
        'quotes.BTC.percent_change_7d': -5.65,
        'last_updated': 1525959556
    },
    {
        'id': 1984,
        'name': 'Substratum',
        'symbol': 'SUB',
        'website_slug': 'substratum',
        'rank': 76,
        'circulating_supply': 383021000,
        'total_supply': 472000000,
        'quotes.USD.price': 0.706048,
        'quotes.USD.volume_24h': 8287830,
        'quotes.USD.market_cap': 270431211,
        'quotes.USD.percent_change_1h': 2.19,
        'quotes.USD.percent_change_24h': 0.53,
        'quotes.USD.percent_change_7d': -14.1,
        'quotes.BTC.price': 0.0000751473,
        'quotes.BTC.volume_24h': 882.1044497803,
        'quotes.BTC.market_cap': 28783,
        'quotes.BTC.percent_change_1h': 2.19,
        'quotes.BTC.percent_change_24h': 0.53,
        'quotes.BTC.percent_change_7d': -14.1,
        'last_updated': 1525959556
    },
    {
        'id': 1996,
        'name': 'SALT',
        'symbol': 'SALT',
        'website_slug': 'salt',
        'rank': 99,
        'circulating_supply': 58777029,
        'total_supply': 120000000,
        'quotes.USD.price': 3.37318,
        'quotes.USD.volume_24h': 8359060,
        'quotes.USD.market_cap': 198265499,
        'quotes.USD.percent_change_1h': -0.07,
        'quotes.USD.percent_change_24h': -2.43,
        'quotes.USD.percent_change_7d': -22.07,
        'quotes.BTC.price': 0.00035902,
        'quotes.BTC.volume_24h': 889.6857225571,
        'quotes.BTC.market_cap': 21102,
        'quotes.BTC.percent_change_1h': -0.07,
        'quotes.BTC.percent_change_24h': -2.43,
        'quotes.BTC.percent_change_7d': -22.07,
        'last_updated': 1525959557
    },
    {
        'id': 2010,
        'name': 'Cardano',
        'symbol': 'ADA',
        'website_slug': 'cardano',
        'rank': 7,
        'circulating_supply': 25927070538,
        'total_supply': 31112483745,
        'max_supply': 45000000000,
        'quotes.USD.price': 0.322667,
        'quotes.USD.volume_24h': 116154000,
        'quotes.USD.market_cap': 8365810069,
        'quotes.USD.percent_change_1h': 1.18,
        'quotes.USD.percent_change_24h': -0.04,
        'quotes.USD.percent_change_7d': -13.81,
        'quotes.BTC.price': 0.0000343426,
        'quotes.BTC.volume_24h': 12362.7005210994,
        'quotes.BTC.market_cap': 890404,
        'quotes.BTC.percent_change_1h': 1.18,
        'quotes.BTC.percent_change_24h': -0.04,
        'quotes.BTC.percent_change_7d': -13.81,
        'last_updated': 1525959557
    },
    {
        'id': 2021,
        'name': 'RChain',
        'symbol': 'RHOC',
        'website_slug': 'rchain',
        'rank': 41,
        'circulating_supply': 360108914,
        'total_supply': 870663574,
        'max_supply': 1000000000,
        'quotes.USD.price': 1.8168,
        'quotes.USD.volume_24h': 966040,
        'quotes.USD.market_cap': 654245874,
        'quotes.USD.percent_change_1h': 0.17,
        'quotes.USD.percent_change_24h': -1.04,
        'quotes.USD.percent_change_7d': -8.53,
        'quotes.BTC.price': 0.0001933688,
        'quotes.BTC.volume_24h': 102.8192159668,
        'quotes.BTC.market_cap': 69634,
        'quotes.BTC.percent_change_1h': 0.17,
        'quotes.BTC.percent_change_24h': -1.04,
        'quotes.BTC.percent_change_7d': -8.53,
        'last_updated': 1525959557
    },
    {
        'id': 2027,
        'name': 'Cryptonex',
        'symbol': 'CNX',
        'website_slug': 'cryptonex',
        'rank': 72,
        'circulating_supply': 45261389,
        'total_supply': 106699014,
        'max_supply': 210000000,
        'quotes.USD.price': 6.22134,
        'quotes.USD.volume_24h': 2060160,
        'quotes.USD.market_cap': 281586488,
        'quotes.USD.percent_change_1h': 3.05,
        'quotes.USD.percent_change_24h': 6.82,
        'quotes.USD.percent_change_7d': -1.51,
        'quotes.BTC.price': 0.0006621603,
        'quotes.BTC.volume_24h': 219.2704608154,
        'quotes.BTC.market_cap': 29970,
        'quotes.BTC.percent_change_1h': 3.05,
        'quotes.BTC.percent_change_24h': 6.82,
        'quotes.BTC.percent_change_7d': -1.51,
        'last_updated': 1525959556
    },
    {
        'id': 2044,
        'name': 'Enigma',
        'symbol': 'ENG',
        'website_slug': 'enigma-project',
        'rank': 91,
        'circulating_supply': 74836171,
        'total_supply': 150000000,
        'quotes.USD.price': 2.82055,
        'quotes.USD.volume_24h': 7391400,
        'quotes.USD.market_cap': 211079162,
        'quotes.USD.percent_change_1h': 0.26,
        'quotes.USD.percent_change_24h': 6.15,
        'quotes.USD.percent_change_7d': -4.78,
        'quotes.BTC.price': 0.0003002016,
        'quotes.BTC.volume_24h': 786.694083989,
        'quotes.BTC.market_cap': 22466,
        'quotes.BTC.percent_change_1h': 0.26,
        'quotes.BTC.percent_change_24h': 6.15,
        'quotes.BTC.percent_change_7d': -4.78,
        'last_updated': 1525959557
    },
    {
        'id': 2062,
        'name': 'Aion',
        'symbol': 'AION',
        'website_slug': 'aion',
        'rank': 57,
        'circulating_supply': 133073439,
        'total_supply': 465934587,
        'quotes.USD.price': 3.20026,
        'quotes.USD.volume_24h': 8911780,
        'quotes.USD.market_cap': 425869604,
        'quotes.USD.percent_change_1h': 0.6,
        'quotes.USD.percent_change_24h': 3.78,
        'quotes.USD.percent_change_7d': -19.95,
        'quotes.BTC.price': 0.0003406155,
        'quotes.BTC.volume_24h': 948.5137597493,
        'quotes.BTC.market_cap': 45327,
        'quotes.BTC.percent_change_1h': 0.6,
        'quotes.BTC.percent_change_24h': 3.78,
        'quotes.BTC.percent_change_7d': -19.95,
        'last_updated': 1525959557
    },
    {
        'id': 2083,
        'name': 'Bitcoin Gold',
        'symbol': 'BTG',
        'website_slug': 'bitcoin-gold',
        'rank': 24,
        'circulating_supply': 16995386,
        'total_supply': 17095386,
        'max_supply': 21000000,
        'quotes.USD.price': 69.6296,
        'quotes.USD.volume_24h': 20973900,
        'quotes.USD.market_cap': 1183381935,
        'quotes.USD.percent_change_1h': 0.99,
        'quotes.USD.percent_change_24h': 0.54,
        'quotes.USD.percent_change_7d': -8,
        'quotes.BTC.price': 0.0074109363,
        'quotes.BTC.volume_24h': 2232.3298763666,
        'quotes.BTC.market_cap': 125952,
        'quotes.BTC.percent_change_1h': 0.99,
        'quotes.BTC.percent_change_24h': 0.54,
        'quotes.BTC.percent_change_7d': -8,
        'last_updated': 1525959558
    },
    {
        'id': 2087,
        'name': 'KuCoin Shares',
        'symbol': 'KCS',
        'website_slug': 'kucoin-shares',
        'rank': 68,
        'circulating_supply': 75730576,
        'total_supply': 180730576,
        'quotes.USD.price': 4.23405,
        'quotes.USD.volume_24h': 657613,
        'quotes.USD.market_cap': 320647045,
        'quotes.USD.percent_change_1h': 0.29,
        'quotes.USD.percent_change_24h': -0.12,
        'quotes.USD.percent_change_7d': 2.16,
        'quotes.BTC.price': 0.0004506456,
        'quotes.BTC.volume_24h': 69.9921877661,
        'quotes.BTC.market_cap': 34128,
        'quotes.BTC.percent_change_1h': 0.29,
        'quotes.BTC.percent_change_24h': -0.12,
        'quotes.BTC.percent_change_7d': 2.16,
        'last_updated': 1525959557
    },
    {
        'id': 2099,
        'name': 'ICON',
        'symbol': 'ICX',
        'website_slug': 'icon',
        'rank': 20,
        'circulating_supply': 387231348,
        'total_supply': 400228740,
        'quotes.USD.price': 4.23754,
        'quotes.USD.volume_24h': 35044200,
        'quotes.USD.market_cap': 1640908328,
        'quotes.USD.percent_change_1h': 0.28,
        'quotes.USD.percent_change_24h': -1.45,
        'quotes.USD.percent_change_7d': -5.61,
        'quotes.BTC.price': 0.0004510171,
        'quotes.BTC.volume_24h': 3729.8840298355,
        'quotes.BTC.market_cap': 174648,
        'quotes.BTC.percent_change_1h': 0.28,
        'quotes.BTC.percent_change_24h': -1.45,
        'quotes.BTC.percent_change_7d': -5.61,
        'last_updated': 1525959558
    },
    {
        'id': 2137,
        'name': 'Electroneum',
        'symbol': 'ETN',
        'website_slug': 'electroneum',
        'rank': 98,
        'circulating_supply': 6941818980,
        'total_supply': 6941818980,
        'max_supply': 21000000000,
        'quotes.USD.price': 0.0287879,
        'quotes.USD.volume_24h': 1045220,
        'quotes.USD.market_cap': 199840391,
        'quotes.USD.percent_change_1h': 0.19,
        'quotes.USD.percent_change_24h': 2.76,
        'quotes.USD.percent_change_7d': -10.25,
        'quotes.BTC.price': 0.000003064,
        'quotes.BTC.volume_24h': 111.2466366949,
        'quotes.BTC.market_cap': 21270,
        'quotes.BTC.percent_change_1h': 0.19,
        'quotes.BTC.percent_change_24h': 2.76,
        'quotes.BTC.percent_change_7d': -10.25,
        'last_updated': 1525959558
    },
    {
        'id': 2213,
        'name': 'QASH',
        'symbol': 'QASH',
        'website_slug': 'qash',
        'rank': 82,
        'circulating_supply': 350000000,
        'total_supply': 1000000000,
        'quotes.USD.price': 0.735873,
        'quotes.USD.volume_24h': 1915520,
        'quotes.USD.market_cap': 257555550,
        'quotes.USD.percent_change_1h': 0.86,
        'quotes.USD.percent_change_24h': 1.88,
        'quotes.USD.percent_change_7d': -13.36,
        'quotes.BTC.price': 0.0000783217,
        'quotes.BTC.volume_24h': 203.8758897858,
        'quotes.BTC.market_cap': 27413,
        'quotes.BTC.percent_change_1h': 0.86,
        'quotes.BTC.percent_change_24h': 1.88,
        'quotes.BTC.percent_change_7d': -13.36,
        'last_updated': 1525959559
    },
    {
        'id': 2222,
        'name': 'Bitcoin Diamond',
        'symbol': 'BCD',
        'website_slug': 'bitcoin-diamond',
        'rank': 36,
        'circulating_supply': 153551000,
        'total_supply': 156551000,
        'max_supply': 210000000,
        'quotes.USD.price': 4.84513,
        'quotes.USD.volume_24h': 3974060,
        'quotes.USD.market_cap': 743974557,
        'quotes.USD.percent_change_1h': 0.83,
        'quotes.USD.percent_change_24h': 0.03,
        'quotes.USD.percent_change_7d': -13.57,
        'quotes.BTC.price': 0.0005156851,
        'quotes.BTC.volume_24h': 422.9739279997,
        'quotes.BTC.market_cap': 79184,
        'quotes.BTC.percent_change_1h': 0.83,
        'quotes.BTC.percent_change_24h': 0.03,
        'quotes.BTC.percent_change_7d': -13.57,
        'last_updated': 1525959559
    },
    {
        'id': 2243,
        'name': 'Dragonchain',
        'symbol': 'DRGN',
        'website_slug': 'dragonchain',
        'rank': 84,
        'circulating_supply': 238421940,
        'total_supply': 433494437,
        'quotes.USD.price': 0.977103,
        'quotes.USD.volume_24h': 2715220,
        'quotes.USD.market_cap': 232962793,
        'quotes.USD.percent_change_1h': 0.27,
        'quotes.USD.percent_change_24h': 0.43,
        'quotes.USD.percent_change_7d': -13.73,
        'quotes.BTC.price': 0.0001039967,
        'quotes.BTC.volume_24h': 288.9909233337,
        'quotes.BTC.market_cap': 24795,
        'quotes.BTC.percent_change_1h': 0.27,
        'quotes.BTC.percent_change_24h': 0.43,
        'quotes.BTC.percent_change_7d': -13.73,
        'last_updated': 1525959560
    },
    {
        'id': 2246,
        'name': 'CyberMiles',
        'symbol': 'CMT',
        'website_slug': 'cybermiles',
        'rank': 97,
        'circulating_supply': 633879774,
        'total_supply': 1000000000,
        'quotes.USD.price': 0.315328,
        'quotes.USD.volume_24h': 47207900,
        'quotes.USD.market_cap': 199880041,
        'quotes.USD.percent_change_1h': -0.47,
        'quotes.USD.percent_change_24h': 0.24,
        'quotes.USD.percent_change_7d': 9.32,
        'quotes.BTC.price': 0.0000335615,
        'quotes.BTC.volume_24h': 5024.5116821634,
        'quotes.BTC.market_cap': 21274,
        'quotes.BTC.percent_change_1h': -0.47,
        'quotes.BTC.percent_change_24h': 0.24,
        'quotes.BTC.percent_change_7d': 9.32,
        'last_updated': 1525959560
    },
    {
        'id': 2297,
        'name': 'Storm',
        'symbol': 'STORM',
        'website_slug': 'storm',
        'rank': 89,
        'circulating_supply': 4091706234,
        'total_supply': 10000000000,
        'quotes.USD.price': 0.0530606,
        'quotes.USD.volume_24h': 30297000,
        'quotes.USD.market_cap': 217108388,
        'quotes.USD.percent_change_1h': -0.27,
        'quotes.USD.percent_change_24h': -0.48,
        'quotes.USD.percent_change_7d': -19.12,
        'quotes.BTC.price': 0.0000056474,
        'quotes.BTC.volume_24h': 3224.6219474814,
        'quotes.BTC.market_cap': 23108,
        'quotes.BTC.percent_change_1h': -0.27,
        'quotes.BTC.percent_change_24h': -0.48,
        'quotes.BTC.percent_change_7d': -19.12,
        'last_updated': 1525959560
    },
    {
        'id': 2299,
        'name': 'aelf',
        'symbol': 'ELF',
        'website_slug': 'aelf',
        'rank': 58,
        'circulating_supply': 250000000,
        'total_supply': 280000000,
        'max_supply': 1000000000,
        'quotes.USD.price': 1.66084,
        'quotes.USD.volume_24h': 61145500,
        'quotes.USD.market_cap': 415210000,
        'quotes.USD.percent_change_1h': 1.73,
        'quotes.USD.percent_change_24h': 7.43,
        'quotes.USD.percent_change_7d': -11.22,
        'quotes.BTC.price': 0.0001767694,
        'quotes.BTC.volume_24h': 6507.9420830353,
        'quotes.BTC.market_cap': 44192,
        'quotes.BTC.percent_change_1h': 1.73,
        'quotes.BTC.percent_change_24h': 7.43,
        'quotes.BTC.percent_change_7d': -11.22,
        'last_updated': 1525959560
    },
    {
        'id': 2300,
        'name': 'WAX',
        'symbol': 'WAX',
        'website_slug': 'wax',
        'rank': 94,
        'circulating_supply': 624832756,
        'total_supply': 1850000000,
        'quotes.USD.price': 0.324088,
        'quotes.USD.volume_24h': 2527640,
        'quotes.USD.market_cap': 202500798,
        'quotes.USD.percent_change_1h': 0.79,
        'quotes.USD.percent_change_24h': -2.32,
        'quotes.USD.percent_change_7d': -22.8,
        'quotes.BTC.price': 0.0000344939,
        'quotes.BTC.volume_24h': 269.0260890297,
        'quotes.BTC.market_cap': 21553,
        'quotes.BTC.percent_change_1h': 0.79,
        'quotes.BTC.percent_change_24h': -2.32,
        'quotes.BTC.percent_change_7d': -22.8,
        'last_updated': 1525959560
    },
    {
        'id': 2346,
        'name': 'WaykiChain',
        'symbol': 'WICC',
        'website_slug': 'waykichain',
        'rank': 63,
        'circulating_supply': 143400000,
        'total_supply': 210000000,
        'quotes.USD.price': 2.45214,
        'quotes.USD.volume_24h': 20386300,
        'quotes.USD.market_cap': 351636876,
        'quotes.USD.percent_change_1h': 0.23,
        'quotes.USD.percent_change_24h': -1.35,
        'quotes.USD.percent_change_7d': 9.71,
        'quotes.BTC.price': 0.0002609903,
        'quotes.BTC.volume_24h': 2169.7894315589,
        'quotes.BTC.market_cap': 37426,
        'quotes.BTC.percent_change_1h': 0.23,
        'quotes.BTC.percent_change_24h': -1.35,
        'quotes.BTC.percent_change_7d': 9.71,
        'last_updated': 1525959561
    },
    {
        'id': 2349,
        'name': 'Mixin',
        'symbol': 'XIN',
        'website_slug': 'mixin',
        'rank': 52,
        'circulating_supply': 422180,
        'total_supply': 1000000,
        'quotes.USD.price': 1099.45,
        'quotes.USD.volume_24h': 658461,
        'quotes.USD.market_cap': 464165484,
        'quotes.USD.percent_change_1h': 1.74,
        'quotes.USD.percent_change_24h': 5.71,
        'quotes.USD.percent_change_7d': -5.3,
        'quotes.BTC.price': 0.1170185365,
        'quotes.BTC.volume_24h': 70.0824435476,
        'quotes.BTC.market_cap': 49403,
        'quotes.BTC.percent_change_1h': 1.74,
        'quotes.BTC.percent_change_24h': 5.71,
        'quotes.BTC.percent_change_7d': -5.3,
        'last_updated': 1525959561
    },
    {
        'id': 2405,
        'name': 'IOStoken',
        'symbol': 'IOST',
        'website_slug': 'iostoken',
        'rank': 42,
        'circulating_supply': 8400000000,
        'total_supply': 21000000000,
        'quotes.USD.price': 0.0764422,
        'quotes.USD.volume_24h': 155818000,
        'quotes.USD.market_cap': 642114480,
        'quotes.USD.percent_change_1h': -0.29,
        'quotes.USD.percent_change_24h': 11.27,
        'quotes.USD.percent_change_7d': 17.35,
        'quotes.BTC.price': 0.000008136,
        'quotes.BTC.volume_24h': 16584.2869793263,
        'quotes.BTC.market_cap': 68343,
        'quotes.BTC.percent_change_1h': -0.29,
        'quotes.BTC.percent_change_24h': 11.27,
        'quotes.BTC.percent_change_7d': 17.35,
        'last_updated': 1525959562
    },
    {
        'id': 2469,
        'name': 'Zilliqa',
        'symbol': 'ZIL',
        'website_slug': 'zilliqa',
        'rank': 22,
        'circulating_supply': 7286961952,
        'total_supply': 12600000000,
        'quotes.USD.price': 0.193907,
        'quotes.USD.volume_24h': 713873000,
        'quotes.USD.market_cap': 1412992931,
        'quotes.USD.percent_change_1h': -1.86,
        'quotes.USD.percent_change_24h': 16.68,
        'quotes.USD.percent_change_7d': 56.2,
        'quotes.BTC.price': 0.0000206382,
        'quotes.BTC.volume_24h': 75980.1479854228,
        'quotes.BTC.market_cap': 150390,
        'quotes.BTC.percent_change_1h': -1.86,
        'quotes.BTC.percent_change_24h': 16.68,
        'quotes.BTC.percent_change_7d': 56.2,
        'last_updated': 1525959563
    },
    {
        'id': 2473,
        'name': 'All Sports',
        'symbol': 'SOC',
        'website_slug': 'all-sports',
        'rank': 100,
        'circulating_supply': 744251871,
        'total_supply': 1500000000,
        'quotes.USD.price': 0.265973,
        'quotes.USD.volume_24h': 28559100,
        'quotes.USD.market_cap': 197950903,
        'quotes.USD.percent_change_1h': -0.76,
        'quotes.USD.percent_change_24h': -5.61,
        'quotes.USD.percent_change_7d': 85.74,
        'quotes.BTC.price': 0.0000283085,
        'quotes.BTC.volume_24h': 3039.650812302,
        'quotes.BTC.market_cap': 21069,
        'quotes.BTC.percent_change_1h': -0.76,
        'quotes.BTC.percent_change_24h': -5.61,
        'quotes.BTC.percent_change_7d': 85.74,
        'last_updated': 1525959562
    },
    {
        'id': 2474,
        'name': 'Matrix AI Network',
        'symbol': 'MAN',
        'website_slug': 'matrix-ai-network',
        'rank': 87,
        'circulating_supply': 150000000,
        'total_supply': 250000000,
        'max_supply': 1000000000,
        'quotes.USD.price': 1.47997,
        'quotes.USD.volume_24h': 7684040,
        'quotes.USD.market_cap': 221995500,
        'quotes.USD.percent_change_1h': -0.07,
        'quotes.USD.percent_change_24h': -1.92,
        'quotes.USD.percent_change_7d': 40.26,
        'quotes.BTC.price': 0.0001575187,
        'quotes.BTC.volume_24h': 817.8408432955,
        'quotes.BTC.market_cap': 23628,
        'quotes.BTC.percent_change_1h': -0.07,
        'quotes.BTC.percent_change_24h': -1.92,
        'quotes.BTC.percent_change_7d': 40.26,
        'last_updated': 1525959562
    },
    {
        'id': 2492,
        'name': 'Elastos',
        'symbol': 'ELA',
        'website_slug': 'elastos',
        'rank': 71,
        'circulating_supply': 5146316,
        'total_supply': 33501771,
        'quotes.USD.price': 57.8153,
        'quotes.USD.volume_24h': 21015300,
        'quotes.USD.market_cap': 297535805,
        'quotes.USD.percent_change_1h': -0.05,
        'quotes.USD.percent_change_24h': 5.23,
        'quotes.USD.percent_change_7d': 20.66,
        'quotes.BTC.price': 0.0061534966,
        'quotes.BTC.volume_24h': 2236.736231736,
        'quotes.BTC.market_cap': 31668,
        'quotes.BTC.percent_change_1h': -0.05,
        'quotes.BTC.percent_change_24h': 5.23,
        'quotes.BTC.percent_change_7d': 20.66,
        'last_updated': 1525959563
    },
    {
        'id': 2496,
        'name': 'Polymath',
        'symbol': 'POLY',
        'website_slug': 'polymath-network',
        'rank': 86,
        'circulating_supply': 239999750,
        'total_supply': 1000000000,
        'quotes.USD.price': 0.955408,
        'quotes.USD.volume_24h': 29235000,
        'quotes.USD.market_cap': 229297681,
        'quotes.USD.percent_change_1h': 0.89,
        'quotes.USD.percent_change_24h': 26.34,
        'quotes.USD.percent_change_7d': 23.65,
        'quotes.BTC.price': 0.0001016876,
        'quotes.BTC.volume_24h': 3111.5893532237,
        'quotes.BTC.market_cap': 24405,
        'quotes.BTC.percent_change_1h': 0.89,
        'quotes.BTC.percent_change_24h': 26.34,
        'quotes.BTC.percent_change_7d': 23.65,
        'last_updated': 1525959563
    },
    {
        'id': 2530,
        'name': 'Fusion',
        'symbol': 'FSN',
        'website_slug': 'fusion',
        'rank': 83,
        'circulating_supply': 29684331,
        'total_supply': 57344000,
        'quotes.USD.price': 8.20882,
        'quotes.USD.volume_24h': 6620640,
        'quotes.USD.market_cap': 243673332,
        'quotes.USD.percent_change_1h': 0.1,
        'quotes.USD.percent_change_24h': 6.08,
        'quotes.USD.percent_change_7d': -7.62,
        'quotes.BTC.price': 0.0008736951,
        'quotes.BTC.volume_24h': 704.6592418514,
        'quotes.BTC.market_cap': 25935,
        'quotes.BTC.percent_change_1h': 0.1,
        'quotes.BTC.percent_change_24h': 6.08,
        'quotes.BTC.percent_change_7d': -7.62,
        'last_updated': 1525959563
    },
    {
        'id': 2566,
        'name': 'Ontology',
        'symbol': 'ONT',
        'website_slug': 'ontology',
        'rank': 29,
        'circulating_supply': 113627171,
        'total_supply': 1000000000,
        'quotes.USD.price': 8.94755,
        'quotes.USD.volume_24h': 77201200,
        'quotes.USD.market_cap': 1016684793,
        'quotes.USD.percent_change_1h': 0.16,
        'quotes.USD.percent_change_24h': 1.78,
        'quotes.USD.percent_change_7d': -11.3,
        'quotes.BTC.price': 0.0009523209,
        'quotes.BTC.volume_24h': 8216.8097135656,
        'quotes.BTC.market_cap': 108210,
        'quotes.BTC.percent_change_1h': 0.16,
        'quotes.BTC.percent_change_24h': 1.78,
        'quotes.BTC.percent_change_7d': -11.3,
        'last_updated': 1525959564
    },
    {
        'id': 2575,
        'name': 'Bitcoin Private',
        'symbol': 'BTCP',
        'website_slug': 'bitcoin-private',
        'rank': 44,
        'circulating_supply': 20429215,
        'total_supply': 20429215,
        'max_supply': 21000000,
        'quotes.USD.price': 29.7408,
        'quotes.USD.volume_24h': 1560230,
        'quotes.USD.market_cap': 607581205,
        'quotes.USD.percent_change_1h': -0.26,
        'quotes.USD.percent_change_24h': 8.61,
        'quotes.USD.percent_change_7d': -24.86,
        'quotes.BTC.price': 0.0031654235,
        'quotes.BTC.volume_24h': 166.0610588876,
        'quotes.BTC.market_cap': 64667,
        'quotes.BTC.percent_change_1h': -0.26,
        'quotes.BTC.percent_change_24h': 8.61,
        'quotes.BTC.percent_change_7d': -24.86,
        'last_updated': 1525959564
    },
    {
        'id': 2585,
        'name': 'Centrality',
        'symbol': 'CENNZ',
        'website_slug': 'centrality',
        'rank': 79,
        'circulating_supply': 707187700,
        'total_supply': 1200000000,
        'quotes.USD.price': 0.373375,
        'quotes.USD.volume_24h': 256000,
        'quotes.USD.market_cap': 264046208,
        'quotes.USD.percent_change_1h': 0.52,
        'quotes.USD.percent_change_24h': 1.83,
        'quotes.USD.percent_change_7d': -11.63,
        'quotes.BTC.price': 0.0000397397,
        'quotes.BTC.volume_24h': 27.247028371,
        'quotes.BTC.market_cap': 28103,
        'quotes.BTC.percent_change_1h': 0.52,
        'quotes.BTC.percent_change_24h': 1.83,
        'quotes.BTC.percent_change_7d': -11.63,
        'last_updated': 1525959564
    },
    {
        'id': 2588,
        'name': 'Loom Network',
        'symbol': 'LOOM',
        'website_slug': 'loom-network',
        'rank': 65,
        'circulating_supply': 577566508,
        'total_supply': 1000000000,
        'quotes.USD.price': 0.573038,
        'quotes.USD.volume_24h': 14705200,
        'quotes.USD.market_cap': 330967556,
        'quotes.USD.percent_change_1h': 0.09,
        'quotes.USD.percent_change_24h': -5.04,
        'quotes.USD.percent_change_7d': 3.13,
        'quotes.BTC.price': 0.0000609906,
        'quotes.BTC.volume_24h': 1565.128912503,
        'quotes.BTC.market_cap': 35226,
        'quotes.BTC.percent_change_1h': 0.09,
        'quotes.BTC.percent_change_24h': -5.04,
        'quotes.BTC.percent_change_7d': 3.13,
        'last_updated': 1525959564
    },
    {
        'id': 2606,
        'name': 'Wanchain',
        'symbol': 'WAN',
        'website_slug': 'wanchain',
        'rank': 33,
        'circulating_supply': 106152493,
        'total_supply': 210000000,
        'quotes.USD.price': 7.98818,
        'quotes.USD.volume_24h': 73962200,
        'quotes.USD.market_cap': 847965219,
        'quotes.USD.percent_change_1h': 0.75,
        'quotes.USD.percent_change_24h': 1.29,
        'quotes.USD.percent_change_7d': -14.14,
        'quotes.BTC.price': 0.0008502116,
        'quotes.BTC.volume_24h': 7872.0709444501,
        'quotes.BTC.market_cap': 90252,
        'quotes.BTC.percent_change_1h': 0.75,
        'quotes.BTC.percent_change_24h': 1.29,
        'quotes.BTC.percent_change_7d': -14.14,
        'last_updated': 1525959564
    },
    {
        'id': 2608,
        'name': 'Mithril',
        'symbol': 'MITH',
        'website_slug': 'mithril',
        'rank': 60,
        'circulating_supply': 306417022,
        'total_supply': 1000000000,
        'quotes.USD.price': 1.24726,
        'quotes.USD.volume_24h': 66753600,
        'quotes.USD.market_cap': 382181695,
        'quotes.USD.percent_change_1h': 4.49,
        'quotes.USD.percent_change_24h': 9.54,
        'quotes.USD.percent_change_7d': -2.56,
        'quotes.BTC.price': 0.0001327505,
        'quotes.BTC.volume_24h': 7104.8329416573,
        'quotes.BTC.market_cap': 40677,
        'quotes.BTC.percent_change_1h': 4.49,
        'quotes.BTC.percent_change_24h': 9.54,
        'quotes.BTC.percent_change_7d': -2.56,
        'last_updated': 1525959564
    },
    {
        'id': 2638,
        'name': 'Cortex',
        'symbol': 'CTXC',
        'website_slug': 'cortex',
        'rank': 75,
        'circulating_supply': 149792458,
        'total_supply': 299792458,
        'quotes.USD.price': 1.81807,
        'quotes.USD.volume_24h': 93114600,
        'quotes.USD.market_cap': 272333174,
        'quotes.USD.percent_change_1h': 0.25,
        'quotes.USD.percent_change_24h': 0.25,
        'quotes.USD.percent_change_7d': -12.97,
        'quotes.BTC.price': 0.0001935039,
        'quotes.BTC.volume_24h': 9910.531827935,
        'quotes.BTC.market_cap': 28985,
        'quotes.BTC.percent_change_1h': 0.25,
        'quotes.BTC.percent_change_24h': 0.25,
        'quotes.BTC.percent_change_7d': -12.97,
        'last_updated': 1525959565
    },
    {
        'id': 2682,
        'name': 'Holo',
        'symbol': 'HOT',
        'website_slug': 'holo',
        'rank': 88,
        'circulating_supply': 133214575156,
        'total_supply': 177619433541,
        'quotes.USD.price': 0.00164132,
        'quotes.USD.volume_24h': 4162980,
        'quotes.USD.market_cap': 218647746,
        'quotes.USD.percent_change_1h': 0.73,
        'quotes.USD.percent_change_24h': 0.74,
        'quotes.USD.percent_change_7d': 37.48,
        'quotes.BTC.price': 1.747e-7,
        'quotes.BTC.volume_24h': 443.0813834679,
        'quotes.BTC.market_cap': 23271,
        'quotes.BTC.percent_change_1h': 0.73,
        'quotes.BTC.percent_change_24h': 0.74,
        'quotes.BTC.percent_change_7d': 37.48,
        'last_updated': 1525959565
    },
    {
        'id': 2694,
        'name': 'Nexo',
        'symbol': 'NEXO',
        'website_slug': 'nexo',
        'rank': 90,
        'circulating_supply': 560000010,
        'total_supply': 1000000000,
        'quotes.USD.price': 0.378016,
        'quotes.USD.volume_24h': 6117620,
        'quotes.USD.market_cap': 211688964,
        'quotes.USD.percent_change_1h': 1.4,
        'quotes.USD.percent_change_24h': -2.55,
        'quotes.USD.percent_change_7d': 61,
        'quotes.BTC.price': 0.0000402336,
        'quotes.BTC.volume_24h': 651.1209597766,
        'quotes.BTC.market_cap': 22531,
        'quotes.BTC.percent_change_1h': 1.4,
        'quotes.BTC.percent_change_24h': -2.55,
        'quotes.BTC.percent_change_7d': 61,
        'last_updated': 1525959565
    }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\zkolev\code\cryptoApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map