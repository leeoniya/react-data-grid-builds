//#region rolldown:runtime
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
	return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));

//#endregion
//#region node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({ "node_modules/react/cjs/react.development.js"(exports, module) {
	(function() {
		function defineDeprecationWarning(methodName, info) {
			Object.defineProperty(Component.prototype, methodName, { get: function() {
				console.warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
			} });
		}
		function getIteratorFn(maybeIterable) {
			if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
			maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
			return "function" === typeof maybeIterable ? maybeIterable : null;
		}
		function warnNoop(publicInstance, callerName) {
			publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
			var warningKey = publicInstance + "." + callerName;
			didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, publicInstance), didWarnStateUpdateForUnmountedComponent[warningKey] = !0);
		}
		function Component(props, context, updater) {
			this.props = props;
			this.context = context;
			this.refs = emptyObject;
			this.updater = updater || ReactNoopUpdateQueue;
		}
		function ComponentDummy() {}
		function PureComponent(props, context, updater) {
			this.props = props;
			this.context = context;
			this.refs = emptyObject;
			this.updater = updater || ReactNoopUpdateQueue;
		}
		function testStringCoercion(value) {
			return "" + value;
		}
		function checkKeyStringCoercion(value) {
			try {
				testStringCoercion(value);
				var JSCompiler_inline_result = !1;
			} catch (e) {
				JSCompiler_inline_result = !0;
			}
			if (JSCompiler_inline_result) {
				JSCompiler_inline_result = console;
				var JSCompiler_temp_const = JSCompiler_inline_result.error;
				var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
				JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
				return testStringCoercion(value);
			}
		}
		function getComponentNameFromType(type) {
			if (null == type) return null;
			if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
			if ("string" === typeof type) return type;
			switch (type) {
				case REACT_FRAGMENT_TYPE: return "Fragment";
				case REACT_PROFILER_TYPE: return "Profiler";
				case REACT_STRICT_MODE_TYPE: return "StrictMode";
				case REACT_SUSPENSE_TYPE: return "Suspense";
				case REACT_SUSPENSE_LIST_TYPE: return "SuspenseList";
				case REACT_ACTIVITY_TYPE: return "Activity";
			}
			if ("object" === typeof type) switch ("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof) {
				case REACT_PORTAL_TYPE: return "Portal";
				case REACT_CONTEXT_TYPE: return (type.displayName || "Context") + ".Provider";
				case REACT_CONSUMER_TYPE: return (type._context.displayName || "Context") + ".Consumer";
				case REACT_FORWARD_REF_TYPE:
					var innerType = type.render;
					type = type.displayName;
					type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
					return type;
				case REACT_MEMO_TYPE: return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
				case REACT_LAZY_TYPE:
					innerType = type._payload;
					type = type._init;
					try {
						return getComponentNameFromType(type(innerType));
					} catch (x) {}
			}
			return null;
		}
		function getTaskName(type) {
			if (type === REACT_FRAGMENT_TYPE) return "<>";
			if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
			try {
				var name = getComponentNameFromType(type);
				return name ? "<" + name + ">" : "<...>";
			} catch (x) {
				return "<...>";
			}
		}
		function getOwner() {
			var dispatcher = ReactSharedInternals.A;
			return null === dispatcher ? null : dispatcher.getOwner();
		}
		function UnknownOwner() {
			return Error("react-stack-top-frame");
		}
		function hasValidKey(config) {
			if (hasOwnProperty.call(config, "key")) {
				var getter = Object.getOwnPropertyDescriptor(config, "key").get;
				if (getter && getter.isReactWarning) return !1;
			}
			return void 0 !== config.key;
		}
		function defineKeyPropWarningGetter(props, displayName) {
			function warnAboutAccessingKey() {
				specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
			}
			warnAboutAccessingKey.isReactWarning = !0;
			Object.defineProperty(props, "key", {
				get: warnAboutAccessingKey,
				configurable: !0
			});
		}
		function elementRefGetterWithDeprecationWarning() {
			var componentName = getComponentNameFromType(this.type);
			didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
			componentName = this.props.ref;
			return void 0 !== componentName ? componentName : null;
		}
		function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
			self = props.ref;
			type = {
				$$typeof: REACT_ELEMENT_TYPE,
				type,
				key,
				props,
				_owner: owner
			};
			null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
				enumerable: !1,
				get: elementRefGetterWithDeprecationWarning
			}) : Object.defineProperty(type, "ref", {
				enumerable: !1,
				value: null
			});
			type._store = {};
			Object.defineProperty(type._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			});
			Object.defineProperty(type, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			});
			Object.defineProperty(type, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: debugStack
			});
			Object.defineProperty(type, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: debugTask
			});
			Object.freeze && (Object.freeze(type.props), Object.freeze(type));
			return type;
		}
		function cloneAndReplaceKey(oldElement, newKey) {
			newKey = ReactElement(oldElement.type, newKey, void 0, void 0, oldElement._owner, oldElement.props, oldElement._debugStack, oldElement._debugTask);
			oldElement._store && (newKey._store.validated = oldElement._store.validated);
			return newKey;
		}
		function isValidElement(object) {
			return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
		}
		function escape(key) {
			var escaperLookup = {
				"=": "=0",
				":": "=2"
			};
			return "$" + key.replace(/[=:]/g, function(match) {
				return escaperLookup[match];
			});
		}
		function getElementKey(element, index) {
			return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
		}
		function noop$1() {}
		function resolveThenable(thenable) {
			switch (thenable.status) {
				case "fulfilled": return thenable.value;
				case "rejected": throw thenable.reason;
				default: switch ("string" === typeof thenable.status ? thenable.then(noop$1, noop$1) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
					"pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
				}, function(error) {
					"pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
				})), thenable.status) {
					case "fulfilled": return thenable.value;
					case "rejected": throw thenable.reason;
				}
			}
			throw thenable;
		}
		function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
			var type = typeof children;
			if ("undefined" === type || "boolean" === type) children = null;
			var invokeCallback = !1;
			if (null === children) invokeCallback = !0;
			else switch (type) {
				case "bigint":
				case "string":
				case "number":
					invokeCallback = !0;
					break;
				case "object": switch (children.$$typeof) {
					case REACT_ELEMENT_TYPE:
					case REACT_PORTAL_TYPE:
						invokeCallback = !0;
						break;
					case REACT_LAZY_TYPE: return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
				}
			}
			if (invokeCallback) {
				invokeCallback = children;
				callback = callback(invokeCallback);
				var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
				isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
					return c;
				})) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + childKey), "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
				return 1;
			}
			invokeCallback = 0;
			childKey = "" === nameSoFar ? "." : nameSoFar + ":";
			if (isArrayImpl(children)) for (var i = 0; i < children.length; i++) nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
			else if (i = getIteratorFn(children), "function" === typeof i) for (i === children.entries && (didWarnAboutMaps || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = !0), children = i.call(children), i = 0; !(nameSoFar = children.next()).done;) nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
			else if ("object" === type) {
				if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
				array = String(children);
				throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
			}
			return invokeCallback;
		}
		function mapChildren(children, func, context) {
			if (null == children) return children;
			var result = [], count = 0;
			mapIntoArray(children, result, "", "", function(child) {
				return func.call(context, child, count++);
			});
			return result;
		}
		function lazyInitializer(payload) {
			if (-1 === payload._status) {
				var ctor = payload._result;
				ctor = ctor();
				ctor.then(function(moduleObject) {
					if (0 === payload._status || -1 === payload._status) payload._status = 1, payload._result = moduleObject;
				}, function(error) {
					if (0 === payload._status || -1 === payload._status) payload._status = 2, payload._result = error;
				});
				-1 === payload._status && (payload._status = 0, payload._result = ctor);
			}
			if (1 === payload._status) return ctor = payload._result, void 0 === ctor && console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", ctor), "default" in ctor || console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", ctor), ctor.default;
			throw payload._result;
		}
		function resolveDispatcher() {
			var dispatcher = ReactSharedInternals.H;
			null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
			return dispatcher;
		}
		function noop() {}
		function enqueueTask(task) {
			if (null === enqueueTaskImpl) try {
				var requireString = ("require" + Math.random()).slice(0, 7);
				enqueueTaskImpl = (module && module[requireString]).call(module, "timers").setImmediate;
			} catch (_err) {
				enqueueTaskImpl = function(callback) {
					!1 === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = !0, "undefined" === typeof MessageChannel && console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
					var channel = new MessageChannel();
					channel.port1.onmessage = callback;
					channel.port2.postMessage(void 0);
				};
			}
			return enqueueTaskImpl(task);
		}
		function aggregateErrors(errors) {
			return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
		}
		function popActScope(prevActQueue, prevActScopeDepth) {
			prevActScopeDepth !== actScopeDepth - 1 && console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
			actScopeDepth = prevActScopeDepth;
		}
		function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
			var queue = ReactSharedInternals.actQueue;
			if (null !== queue) if (0 !== queue.length) try {
				flushActQueue(queue);
				enqueueTask(function() {
					return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
				});
				return;
			} catch (error) {
				ReactSharedInternals.thrownErrors.push(error);
			}
			else ReactSharedInternals.actQueue = null;
			0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
		}
		function flushActQueue(queue) {
			if (!isFlushing) {
				isFlushing = !0;
				var i = 0;
				try {
					for (; i < queue.length; i++) {
						var callback = queue[i];
						do {
							ReactSharedInternals.didUsePromise = !1;
							var continuation = callback(!1);
							if (null !== continuation) {
								if (ReactSharedInternals.didUsePromise) {
									queue[i] = callback;
									queue.splice(0, i);
									return;
								}
								callback = continuation;
							} else break;
						} while (1);
					}
					queue.length = 0;
				} catch (error) {
					queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
				} finally {
					isFlushing = !1;
				}
			}
		}
		"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
		Symbol.for("react.provider");
		var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
			isMounted: function() {
				return !1;
			},
			enqueueForceUpdate: function(publicInstance) {
				warnNoop(publicInstance, "forceUpdate");
			},
			enqueueReplaceState: function(publicInstance) {
				warnNoop(publicInstance, "replaceState");
			},
			enqueueSetState: function(publicInstance) {
				warnNoop(publicInstance, "setState");
			}
		}, assign = Object.assign, emptyObject = {};
		Object.freeze(emptyObject);
		Component.prototype.isReactComponent = {};
		Component.prototype.setState = function(partialState, callback) {
			if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
			this.updater.enqueueSetState(this, partialState, callback, "setState");
		};
		Component.prototype.forceUpdate = function(callback) {
			this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
		};
		var deprecatedAPIs = {
			isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
			replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
		}, fnName;
		for (fnName in deprecatedAPIs) deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
		ComponentDummy.prototype = Component.prototype;
		deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
		deprecatedAPIs.constructor = PureComponent;
		assign(deprecatedAPIs, Component.prototype);
		deprecatedAPIs.isPureReactComponent = !0;
		var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = {
			H: null,
			A: null,
			T: null,
			S: null,
			V: null,
			actQueue: null,
			isBatchingLegacy: !1,
			didScheduleLegacyUpdate: !1,
			didUsePromise: !1,
			thrownErrors: [],
			getCurrentStack: null,
			recentlyCreatedOwnerStacks: 0
		}, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
			return null;
		};
		deprecatedAPIs = { "react-stack-bottom-frame": function(callStackForError) {
			return callStackForError();
		} };
		var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
		var didWarnAboutElementRef = {};
		var unknownOwnerDebugStack = deprecatedAPIs["react-stack-bottom-frame"].bind(deprecatedAPIs, UnknownOwner)();
		var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
		var didWarnAboutMaps = !1, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
			if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
				var event = new window.ErrorEvent("error", {
					bubbles: !0,
					cancelable: !0,
					message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
					error
				});
				if (!window.dispatchEvent(event)) return;
			} else if ("object" === typeof process && "function" === typeof process.emit) {
				process.emit("uncaughtException", error);
				return;
			}
			console.error(error);
		}, didWarnAboutMessageChannel = !1, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = !1, isFlushing = !1, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
			queueMicrotask(function() {
				return queueMicrotask(callback);
			});
		} : enqueueTask;
		deprecatedAPIs = Object.freeze({
			__proto__: null,
			c: function(size) {
				return resolveDispatcher().useMemoCache(size);
			}
		});
		exports.Children = {
			map: mapChildren,
			forEach: function(children, forEachFunc, forEachContext) {
				mapChildren(children, function() {
					forEachFunc.apply(this, arguments);
				}, forEachContext);
			},
			count: function(children) {
				var n = 0;
				mapChildren(children, function() {
					n++;
				});
				return n;
			},
			toArray: function(children) {
				return mapChildren(children, function(child) {
					return child;
				}) || [];
			},
			only: function(children) {
				if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
				return children;
			}
		};
		exports.Component = Component;
		exports.Fragment = REACT_FRAGMENT_TYPE;
		exports.Profiler = REACT_PROFILER_TYPE;
		exports.PureComponent = PureComponent;
		exports.StrictMode = REACT_STRICT_MODE_TYPE;
		exports.Suspense = REACT_SUSPENSE_TYPE;
		exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
		exports.__COMPILER_RUNTIME = deprecatedAPIs;
		exports.act = function(callback) {
			var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
			actScopeDepth++;
			var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = !1;
			try {
				var result = callback();
			} catch (error) {
				ReactSharedInternals.thrownErrors.push(error);
			}
			if (0 < ReactSharedInternals.thrownErrors.length) throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
			if (null !== result && "object" === typeof result && "function" === typeof result.then) {
				var thenable = result;
				queueSeveralMicrotasks(function() {
					didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = !0, console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
				});
				return { then: function(resolve, reject) {
					didAwaitActCall = !0;
					thenable.then(function(returnValue) {
						popActScope(prevActQueue, prevActScopeDepth);
						if (0 === prevActScopeDepth) {
							try {
								flushActQueue(queue), enqueueTask(function() {
									return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
								});
							} catch (error$0) {
								ReactSharedInternals.thrownErrors.push(error$0);
							}
							if (0 < ReactSharedInternals.thrownErrors.length) {
								var _thrownError = aggregateErrors(ReactSharedInternals.thrownErrors);
								ReactSharedInternals.thrownErrors.length = 0;
								reject(_thrownError);
							}
						} else resolve(returnValue);
					}, function(error) {
						popActScope(prevActQueue, prevActScopeDepth);
						0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
					});
				} };
			}
			var returnValue$jscomp$0 = result;
			popActScope(prevActQueue, prevActScopeDepth);
			0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
				didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = !0, console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"));
			}), ReactSharedInternals.actQueue = null);
			if (0 < ReactSharedInternals.thrownErrors.length) throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
			return { then: function(resolve, reject) {
				didAwaitActCall = !0;
				0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
					return recursivelyFlushAsyncActWork(returnValue$jscomp$0, resolve, reject);
				})) : resolve(returnValue$jscomp$0);
			} };
		};
		exports.cache = function(fn) {
			return function() {
				return fn.apply(null, arguments);
			};
		};
		exports.captureOwnerStack = function() {
			var getCurrentStack = ReactSharedInternals.getCurrentStack;
			return null === getCurrentStack ? null : getCurrentStack();
		};
		exports.cloneElement = function(element, config, children) {
			if (null === element || void 0 === element) throw Error("The argument must be a React element, but you passed " + element + ".");
			var props = assign({}, element.props), key = element.key, owner = element._owner;
			if (null != config) {
				var JSCompiler_inline_result;
				a: {
					if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(config, "ref").get) && JSCompiler_inline_result.isReactWarning) {
						JSCompiler_inline_result = !1;
						break a;
					}
					JSCompiler_inline_result = void 0 !== config.ref;
				}
				JSCompiler_inline_result && (owner = getOwner());
				hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
				for (propName in config) !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
			}
			var propName = arguments.length - 2;
			if (1 === propName) props.children = children;
			else if (1 < propName) {
				JSCompiler_inline_result = Array(propName);
				for (var i = 0; i < propName; i++) JSCompiler_inline_result[i] = arguments[i + 2];
				props.children = JSCompiler_inline_result;
			}
			props = ReactElement(element.type, key, void 0, void 0, owner, props, element._debugStack, element._debugTask);
			for (key = 2; key < arguments.length; key++) owner = arguments[key], isValidElement(owner) && owner._store && (owner._store.validated = 1);
			return props;
		};
		exports.createContext = function(defaultValue) {
			defaultValue = {
				$$typeof: REACT_CONTEXT_TYPE,
				_currentValue: defaultValue,
				_currentValue2: defaultValue,
				_threadCount: 0,
				Provider: null,
				Consumer: null
			};
			defaultValue.Provider = defaultValue;
			defaultValue.Consumer = {
				$$typeof: REACT_CONSUMER_TYPE,
				_context: defaultValue
			};
			defaultValue._currentRenderer = null;
			defaultValue._currentRenderer2 = null;
			return defaultValue;
		};
		exports.createElement = function(type, config, children) {
			for (var i = 2; i < arguments.length; i++) {
				var node = arguments[i];
				isValidElement(node) && node._store && (node._store.validated = 1);
			}
			i = {};
			node = null;
			if (null != config) for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = !0, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), hasValidKey(config) && (checkKeyStringCoercion(config.key), node = "" + config.key), config) hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
			var childrenLength = arguments.length - 2;
			if (1 === childrenLength) i.children = children;
			else if (1 < childrenLength) {
				for (var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++) childArray[_i] = arguments[_i + 2];
				Object.freeze && Object.freeze(childArray);
				i.children = childArray;
			}
			if (type && type.defaultProps) for (propName in childrenLength = type.defaultProps, childrenLength) void 0 === i[propName] && (i[propName] = childrenLength[propName]);
			node && defineKeyPropWarningGetter(i, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
			var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
			return ReactElement(type, node, void 0, void 0, getOwner(), i, propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack, propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
		};
		exports.createRef = function() {
			var refObject = { current: null };
			Object.seal(refObject);
			return refObject;
		};
		exports.forwardRef = function(render) {
			null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : "function" !== typeof render ? console.error("forwardRef requires a render function but was given %s.", null === render ? "null" : typeof render) : 0 !== render.length && 2 !== render.length && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", 1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
			null != render && null != render.defaultProps && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
			var elementType = {
				$$typeof: REACT_FORWARD_REF_TYPE,
				render
			}, ownName;
			Object.defineProperty(elementType, "displayName", {
				enumerable: !1,
				configurable: !0,
				get: function() {
					return ownName;
				},
				set: function(name) {
					ownName = name;
					render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
				}
			});
			return elementType;
		};
		exports.isValidElement = isValidElement;
		exports.lazy = function(ctor) {
			return {
				$$typeof: REACT_LAZY_TYPE,
				_payload: {
					_status: -1,
					_result: ctor
				},
				_init: lazyInitializer
			};
		};
		exports.memo = function(type, compare) {
			type ?? console.error("memo: The first argument must be a component. Instead received: %s", null === type ? "null" : typeof type);
			compare = {
				$$typeof: REACT_MEMO_TYPE,
				type,
				compare: void 0 === compare ? null : compare
			};
			var ownName;
			Object.defineProperty(compare, "displayName", {
				enumerable: !1,
				configurable: !0,
				get: function() {
					return ownName;
				},
				set: function(name) {
					ownName = name;
					type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
				}
			});
			return compare;
		};
		exports.startTransition = function(scope) {
			var prevTransition = ReactSharedInternals.T, currentTransition = {};
			ReactSharedInternals.T = currentTransition;
			currentTransition._updatedFibers = new Set();
			try {
				var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
				null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
				"object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
			} catch (error) {
				reportGlobalError(error);
			} finally {
				null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")), ReactSharedInternals.T = prevTransition;
			}
		};
		exports.unstable_useCacheRefresh = function() {
			return resolveDispatcher().useCacheRefresh();
		};
		exports.use = function(usable) {
			return resolveDispatcher().use(usable);
		};
		exports.useActionState = function(action, initialState, permalink) {
			return resolveDispatcher().useActionState(action, initialState, permalink);
		};
		exports.useCallback = function(callback, deps) {
			return resolveDispatcher().useCallback(callback, deps);
		};
		exports.useContext = function(Context) {
			var dispatcher = resolveDispatcher();
			Context.$$typeof === REACT_CONSUMER_TYPE && console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?");
			return dispatcher.useContext(Context);
		};
		exports.useDebugValue = function(value, formatterFn) {
			return resolveDispatcher().useDebugValue(value, formatterFn);
		};
		exports.useDeferredValue = function(value, initialValue) {
			return resolveDispatcher().useDeferredValue(value, initialValue);
		};
		exports.useEffect = function(create, createDeps, update) {
			create ?? console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?");
			var dispatcher = resolveDispatcher();
			if ("function" === typeof update) throw Error("useEffect CRUD overload is not enabled in this build of React.");
			return dispatcher.useEffect(create, createDeps);
		};
		exports.useId = function() {
			return resolveDispatcher().useId();
		};
		exports.useImperativeHandle = function(ref, create, deps) {
			return resolveDispatcher().useImperativeHandle(ref, create, deps);
		};
		exports.useInsertionEffect = function(create, deps) {
			create ?? console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?");
			return resolveDispatcher().useInsertionEffect(create, deps);
		};
		exports.useLayoutEffect = function(create, deps) {
			create ?? console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?");
			return resolveDispatcher().useLayoutEffect(create, deps);
		};
		exports.useMemo = function(create, deps) {
			return resolveDispatcher().useMemo(create, deps);
		};
		exports.useOptimistic = function(passthrough, reducer) {
			return resolveDispatcher().useOptimistic(passthrough, reducer);
		};
		exports.useReducer = function(reducer, initialArg, init) {
			return resolveDispatcher().useReducer(reducer, initialArg, init);
		};
		exports.useRef = function(initialValue) {
			return resolveDispatcher().useRef(initialValue);
		};
		exports.useState = function(initialState) {
			return resolveDispatcher().useState(initialState);
		};
		exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
			return resolveDispatcher().useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
		};
		exports.useTransition = function() {
			return resolveDispatcher().useTransition();
		};
		exports.version = "19.1.0";
		"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
} });

//#endregion
//#region node_modules/react/index.js
var require_react = __commonJS({ "node_modules/react/index.js"(exports, module) {
	module.exports = require_react_development();
} });

//#endregion
//#region node_modules/react-dom/cjs/react-dom.development.js
var require_react_dom_development = __commonJS({ "node_modules/react-dom/cjs/react-dom.development.js"(exports) {
	(function() {
		function noop() {}
		function testStringCoercion(value) {
			return "" + value;
		}
		function createPortal$1(children, containerInfo, implementation) {
			var key = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
			try {
				testStringCoercion(key);
				var JSCompiler_inline_result = !1;
			} catch (e) {
				JSCompiler_inline_result = !0;
			}
			JSCompiler_inline_result && (console.error("The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", "function" === typeof Symbol && Symbol.toStringTag && key[Symbol.toStringTag] || key.constructor.name || "Object"), testStringCoercion(key));
			return {
				$$typeof: REACT_PORTAL_TYPE,
				key: null == key ? null : "" + key,
				children,
				containerInfo,
				implementation
			};
		}
		function getCrossOriginStringAs(as, input) {
			if ("font" === as) return "";
			if ("string" === typeof input) return "use-credentials" === input ? input : "";
		}
		function getValueDescriptorExpectingObjectForWarning(thing) {
			return null === thing ? "`null`" : void 0 === thing ? "`undefined`" : "" === thing ? "an empty string" : "something with type \"" + typeof thing + "\"";
		}
		function getValueDescriptorExpectingEnumForWarning(thing) {
			return null === thing ? "`null`" : void 0 === thing ? "`undefined`" : "" === thing ? "an empty string" : "string" === typeof thing ? JSON.stringify(thing) : "number" === typeof thing ? "`" + thing + "`" : "something with type \"" + typeof thing + "\"";
		}
		function resolveDispatcher() {
			var dispatcher = ReactSharedInternals.H;
			null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
			return dispatcher;
		}
		"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var React = require_react(), Internals = {
			d: {
				f: noop,
				r: function() {
					throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.");
				},
				D: noop,
				C: noop,
				L: noop,
				m: noop,
				X: noop,
				S: noop,
				M: noop
			},
			p: 0,
			findDOMNode: null
		}, REACT_PORTAL_TYPE = Symbol.for("react.portal"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
		"function" === typeof Map && null != Map.prototype && "function" === typeof Map.prototype.forEach && "function" === typeof Set && null != Set.prototype && "function" === typeof Set.prototype.clear && "function" === typeof Set.prototype.forEach || console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
		exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
		exports.createPortal = function(children, container) {
			var key = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
			if (!container || 1 !== container.nodeType && 9 !== container.nodeType && 11 !== container.nodeType) throw Error("Target container is not a DOM element.");
			return createPortal$1(children, container, null, key);
		};
		exports.flushSync = function(fn) {
			var previousTransition = ReactSharedInternals.T, previousUpdatePriority = Internals.p;
			try {
				if (ReactSharedInternals.T = null, Internals.p = 2, fn) return fn();
			} finally {
				ReactSharedInternals.T = previousTransition, Internals.p = previousUpdatePriority, Internals.d.f() && console.error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.");
			}
		};
		exports.preconnect = function(href, options) {
			"string" === typeof href && href ? null != options && "object" !== typeof options ? console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.", getValueDescriptorExpectingEnumForWarning(options)) : null != options && "string" !== typeof options.crossOrigin && console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.", getValueDescriptorExpectingObjectForWarning(options.crossOrigin)) : console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", getValueDescriptorExpectingObjectForWarning(href));
			"string" === typeof href && (options ? (options = options.crossOrigin, options = "string" === typeof options ? "use-credentials" === options ? options : "" : void 0) : options = null, Internals.d.C(href, options));
		};
		exports.prefetchDNS = function(href) {
			if ("string" !== typeof href || !href) console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", getValueDescriptorExpectingObjectForWarning(href));
			else if (1 < arguments.length) {
				var options = arguments[1];
				"object" === typeof options && options.hasOwnProperty("crossOrigin") ? console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.", getValueDescriptorExpectingEnumForWarning(options)) : console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.", getValueDescriptorExpectingEnumForWarning(options));
			}
			"string" === typeof href && Internals.d.D(href);
		};
		exports.preinit = function(href, options) {
			"string" === typeof href && href ? null == options || "object" !== typeof options ? console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.", getValueDescriptorExpectingEnumForWarning(options)) : "style" !== options.as && "script" !== options.as && console.error("ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are \"style\" and \"script\".", getValueDescriptorExpectingEnumForWarning(options.as)) : console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", getValueDescriptorExpectingObjectForWarning(href));
			if ("string" === typeof href && options && "string" === typeof options.as) {
				var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = "string" === typeof options.integrity ? options.integrity : void 0, fetchPriority = "string" === typeof options.fetchPriority ? options.fetchPriority : void 0;
				"style" === as ? Internals.d.S(href, "string" === typeof options.precedence ? options.precedence : void 0, {
					crossOrigin,
					integrity,
					fetchPriority
				}) : "script" === as && Internals.d.X(href, {
					crossOrigin,
					integrity,
					fetchPriority,
					nonce: "string" === typeof options.nonce ? options.nonce : void 0
				});
			}
		};
		exports.preinitModule = function(href, options) {
			var encountered = "";
			"string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
			void 0 !== options && "object" !== typeof options ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : options && "as" in options && "script" !== options.as && (encountered += " The `as` option encountered was " + getValueDescriptorExpectingEnumForWarning(options.as) + ".");
			if (encountered) console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s", encountered);
			else switch (encountered = options && "string" === typeof options.as ? options.as : "script", encountered) {
				case "script": break;
				default: encountered = getValueDescriptorExpectingEnumForWarning(encountered), console.error("ReactDOM.preinitModule(): Currently the only supported \"as\" type for this function is \"script\" but received \"%s\" instead. This warning was generated for `href` \"%s\". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)", encountered, href);
			}
			if ("string" === typeof href) if ("object" === typeof options && null !== options) {
				if (null == options.as || "script" === options.as) encountered = getCrossOriginStringAs(options.as, options.crossOrigin), Internals.d.M(href, {
					crossOrigin: encountered,
					integrity: "string" === typeof options.integrity ? options.integrity : void 0,
					nonce: "string" === typeof options.nonce ? options.nonce : void 0
				});
			} else options ?? Internals.d.M(href);
		};
		exports.preload = function(href, options) {
			var encountered = "";
			"string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
			null == options || "object" !== typeof options ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : "string" === typeof options.as && options.as || (encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options.as) + ".");
			encountered && console.error("ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel=\"preload\" as=\"...\" />` tag.%s", encountered);
			if ("string" === typeof href && "object" === typeof options && null !== options && "string" === typeof options.as) {
				encountered = options.as;
				var crossOrigin = getCrossOriginStringAs(encountered, options.crossOrigin);
				Internals.d.L(href, encountered, {
					crossOrigin,
					integrity: "string" === typeof options.integrity ? options.integrity : void 0,
					nonce: "string" === typeof options.nonce ? options.nonce : void 0,
					type: "string" === typeof options.type ? options.type : void 0,
					fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0,
					referrerPolicy: "string" === typeof options.referrerPolicy ? options.referrerPolicy : void 0,
					imageSrcSet: "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
					imageSizes: "string" === typeof options.imageSizes ? options.imageSizes : void 0,
					media: "string" === typeof options.media ? options.media : void 0
				});
			}
		};
		exports.preloadModule = function(href, options) {
			var encountered = "";
			"string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
			void 0 !== options && "object" !== typeof options ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : options && "as" in options && "string" !== typeof options.as && (encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options.as) + ".");
			encountered && console.error("ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel=\"modulepreload\" as=\"...\" />` tag.%s", encountered);
			"string" === typeof href && (options ? (encountered = getCrossOriginStringAs(options.as, options.crossOrigin), Internals.d.m(href, {
				as: "string" === typeof options.as && "script" !== options.as ? options.as : void 0,
				crossOrigin: encountered,
				integrity: "string" === typeof options.integrity ? options.integrity : void 0
			})) : Internals.d.m(href));
		};
		exports.requestFormReset = function(form) {
			Internals.d.r(form);
		};
		exports.unstable_batchedUpdates = function(fn, a) {
			return fn(a);
		};
		exports.useFormState = function(action, initialState, permalink) {
			return resolveDispatcher().useFormState(action, initialState, permalink);
		};
		exports.useFormStatus = function() {
			return resolveDispatcher().useHostTransitionStatus();
		};
		exports.version = "19.1.0";
		"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
} });

//#endregion
//#region node_modules/react-dom/index.js
var require_react_dom = __commonJS({ "node_modules/react-dom/index.js"(exports, module) {
	module.exports = require_react_dom_development();
} });

//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function r(e) {
	var t, f, n = "";
	if ("string" == typeof e || "number" == typeof e) n += e;
	else if ("object" == typeof e) if (Array.isArray(e)) {
		var o = e.length;
		for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
	} else for (f in e) e[f] && (n && (n += " "), n += f);
	return n;
}
function clsx() {
	for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
	return n;
}
var clsx_default = clsx;

//#endregion
//#region src/utils/colSpanUtils.ts
function getColSpan(column, lastFrozenColumnIndex, args) {
	const colSpan = typeof column.colSpan === "function" ? column.colSpan(args) : 1;
	if (Number.isInteger(colSpan) && colSpan > 1 && (!column.frozen || column.idx + colSpan - 1 <= lastFrozenColumnIndex)) return colSpan;
	return void 0;
}

//#endregion
//#region src/utils/domUtils.ts
function stopPropagation(event) {
	event.stopPropagation();
}
function scrollIntoView(element, behavior = "instant") {
	element?.scrollIntoView({
		inline: "nearest",
		block: "nearest",
		behavior
	});
}

//#endregion
//#region src/utils/eventUtils.ts
function createCellEvent(event) {
	let defaultPrevented = false;
	const cellEvent = {
		...event,
		preventGridDefault() {
			defaultPrevented = true;
		},
		isGridDefaultPrevented() {
			return defaultPrevented;
		}
	};
	Object.setPrototypeOf(cellEvent, Object.getPrototypeOf(event));
	return cellEvent;
}

//#endregion
//#region src/utils/keyboardUtils.ts
const nonInputKeys = new Set([
	"Unidentified",
	"Alt",
	"AltGraph",
	"CapsLock",
	"Control",
	"Fn",
	"FnLock",
	"Meta",
	"NumLock",
	"ScrollLock",
	"Shift",
	"Tab",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight",
	"ArrowUp",
	"End",
	"Home",
	"PageDown",
	"PageUp",
	"Insert",
	"ContextMenu",
	"Escape",
	"Pause",
	"Play",
	"PrintScreen",
	"F1",
	"F3",
	"F4",
	"F5",
	"F6",
	"F7",
	"F8",
	"F9",
	"F10",
	"F11",
	"F12"
]);
function isCtrlKeyHeldDown(e) {
	return (e.ctrlKey || e.metaKey) && e.key !== "Control";
}
const vKey = 86;
function isDefaultCellInput(event, isUserHandlingPaste) {
	if (isCtrlKeyHeldDown(event) && (event.keyCode !== vKey || isUserHandlingPaste)) return false;
	return !nonInputKeys.has(event.key);
}
/**
* By default, the following navigation keys are enabled while an editor is open, under specific conditions:
* - Tab:
*   - The editor must be an <input>, a <textarea>, or a <select> element.
*   - The editor element must be the only immediate child of the editor container/a label.
*/
function onEditorNavigation({ key, target }) {
	if (key === "Tab" && (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement)) return target.closest(".rdg-editor-container")?.querySelectorAll("input, textarea, select").length === 1;
	return false;
}
function getLeftRightKey(direction) {
	const isRtl = direction === "rtl";
	return {
		leftKey: isRtl ? "ArrowRight" : "ArrowLeft",
		rightKey: isRtl ? "ArrowLeft" : "ArrowRight"
	};
}

//#endregion
//#region node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({ "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
	(function() {
		function getComponentNameFromType(type) {
			if (null == type) return null;
			if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
			if ("string" === typeof type) return type;
			switch (type) {
				case REACT_FRAGMENT_TYPE: return "Fragment";
				case REACT_PROFILER_TYPE: return "Profiler";
				case REACT_STRICT_MODE_TYPE: return "StrictMode";
				case REACT_SUSPENSE_TYPE: return "Suspense";
				case REACT_SUSPENSE_LIST_TYPE: return "SuspenseList";
				case REACT_ACTIVITY_TYPE: return "Activity";
			}
			if ("object" === typeof type) switch ("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof) {
				case REACT_PORTAL_TYPE: return "Portal";
				case REACT_CONTEXT_TYPE: return (type.displayName || "Context") + ".Provider";
				case REACT_CONSUMER_TYPE: return (type._context.displayName || "Context") + ".Consumer";
				case REACT_FORWARD_REF_TYPE:
					var innerType = type.render;
					type = type.displayName;
					type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
					return type;
				case REACT_MEMO_TYPE: return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
				case REACT_LAZY_TYPE:
					innerType = type._payload;
					type = type._init;
					try {
						return getComponentNameFromType(type(innerType));
					} catch (x) {}
			}
			return null;
		}
		function testStringCoercion(value) {
			return "" + value;
		}
		function checkKeyStringCoercion(value) {
			try {
				testStringCoercion(value);
				var JSCompiler_inline_result = !1;
			} catch (e) {
				JSCompiler_inline_result = !0;
			}
			if (JSCompiler_inline_result) {
				JSCompiler_inline_result = console;
				var JSCompiler_temp_const = JSCompiler_inline_result.error;
				var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
				JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
				return testStringCoercion(value);
			}
		}
		function getTaskName(type) {
			if (type === REACT_FRAGMENT_TYPE) return "<>";
			if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
			try {
				var name = getComponentNameFromType(type);
				return name ? "<" + name + ">" : "<...>";
			} catch (x) {
				return "<...>";
			}
		}
		function getOwner() {
			var dispatcher = ReactSharedInternals.A;
			return null === dispatcher ? null : dispatcher.getOwner();
		}
		function UnknownOwner() {
			return Error("react-stack-top-frame");
		}
		function hasValidKey(config) {
			if (hasOwnProperty.call(config, "key")) {
				var getter = Object.getOwnPropertyDescriptor(config, "key").get;
				if (getter && getter.isReactWarning) return !1;
			}
			return void 0 !== config.key;
		}
		function defineKeyPropWarningGetter(props, displayName) {
			function warnAboutAccessingKey() {
				specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
			}
			warnAboutAccessingKey.isReactWarning = !0;
			Object.defineProperty(props, "key", {
				get: warnAboutAccessingKey,
				configurable: !0
			});
		}
		function elementRefGetterWithDeprecationWarning() {
			var componentName = getComponentNameFromType(this.type);
			didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
			componentName = this.props.ref;
			return void 0 !== componentName ? componentName : null;
		}
		function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
			self = props.ref;
			type = {
				$$typeof: REACT_ELEMENT_TYPE,
				type,
				key,
				props,
				_owner: owner
			};
			null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
				enumerable: !1,
				get: elementRefGetterWithDeprecationWarning
			}) : Object.defineProperty(type, "ref", {
				enumerable: !1,
				value: null
			});
			type._store = {};
			Object.defineProperty(type._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			});
			Object.defineProperty(type, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			});
			Object.defineProperty(type, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: debugStack
			});
			Object.defineProperty(type, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: debugTask
			});
			Object.freeze && (Object.freeze(type.props), Object.freeze(type));
			return type;
		}
		function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
			var children = config.children;
			if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
				for (isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++) validateChildKeys(children[isStaticChildren]);
				Object.freeze && Object.freeze(children);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else validateChildKeys(children);
			if (hasOwnProperty.call(config, "key")) {
				children = getComponentNameFromType(type);
				var keys = Object.keys(config).filter(function(k) {
					return "key" !== k;
				});
				isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
				didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
			}
			children = null;
			void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
			hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
			if ("key" in config) {
				maybeKey = {};
				for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
			} else maybeKey = config;
			children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
			return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
		}
		function validateChildKeys(node) {
			"object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
		}
		var React = require_react(), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
		Symbol.for("react.provider");
		var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
			return null;
		};
		React = { "react-stack-bottom-frame": function(callStackForError) {
			return callStackForError();
		} };
		var specialPropKeyWarningShown;
		var didWarnAboutElementRef = {};
		var unknownOwnerDebugStack = React["react-stack-bottom-frame"].bind(React, UnknownOwner)();
		var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
		var didWarnAboutKeySpread = {};
		exports.Fragment = REACT_FRAGMENT_TYPE;
		exports.jsx = function(type, config, maybeKey, source, self) {
			var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
			return jsxDEVImpl(type, config, maybeKey, !1, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
		};
		exports.jsxs = function(type, config, maybeKey, source, self) {
			var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
			return jsxDEVImpl(type, config, maybeKey, !0, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
		};
	})();
} });

//#endregion
//#region node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({ "node_modules/react/jsx-runtime.js"(exports, module) {
	module.exports = require_react_jsx_runtime_development();
} });

//#endregion
//#region src/utils/renderMeasuringCells.tsx
var import_jsx_runtime$20 = __toESM(require_jsx_runtime(), 1);
const measuringCellClassname = "mlln6zg7-0-0-beta-52";
function renderMeasuringCells(viewportColumns) {
	return viewportColumns.map(({ key, idx, minWidth, maxWidth }) => /* @__PURE__ */ (0, import_jsx_runtime$20.jsx)("div", {
		className: measuringCellClassname,
		style: {
			gridColumnStart: idx + 1,
			minWidth,
			maxWidth
		},
		"data-measuring-cell-key": key
	}, key));
}

//#endregion
//#region src/utils/selectedCellUtils.ts
function isSelectedCellEditable({ selectedPosition, columns, rows }) {
	const column = columns[selectedPosition.idx];
	const row$1 = rows[selectedPosition.rowIdx];
	return isCellEditableUtil(column, row$1);
}
function isCellEditableUtil(column, row$1) {
	return column.renderEditCell != null && (typeof column.editable === "function" ? column.editable(row$1) : column.editable) !== false;
}
function getSelectedCellColSpan({ rows, topSummaryRows, bottomSummaryRows, rowIdx, mainHeaderRowIdx, lastFrozenColumnIndex, column }) {
	const topSummaryRowsCount = topSummaryRows?.length ?? 0;
	if (rowIdx === mainHeaderRowIdx) return getColSpan(column, lastFrozenColumnIndex, { type: "HEADER" });
	if (topSummaryRows && rowIdx > mainHeaderRowIdx && rowIdx <= topSummaryRowsCount + mainHeaderRowIdx) return getColSpan(column, lastFrozenColumnIndex, {
		type: "SUMMARY",
		row: topSummaryRows[rowIdx + topSummaryRowsCount]
	});
	if (rowIdx >= 0 && rowIdx < rows.length) {
		const row$1 = rows[rowIdx];
		return getColSpan(column, lastFrozenColumnIndex, {
			type: "ROW",
			row: row$1
		});
	}
	if (bottomSummaryRows) return getColSpan(column, lastFrozenColumnIndex, {
		type: "SUMMARY",
		row: bottomSummaryRows[rowIdx - rows.length]
	});
	return void 0;
}
function getNextSelectedCellPosition({ moveUp, moveNext, cellNavigationMode, columns, colSpanColumns, rows, topSummaryRows, bottomSummaryRows, minRowIdx, mainHeaderRowIdx, maxRowIdx, currentPosition: { idx: currentIdx, rowIdx: currentRowIdx }, nextPosition, lastFrozenColumnIndex, isCellWithinBounds }) {
	let { idx: nextIdx, rowIdx: nextRowIdx } = nextPosition;
	const columnsCount = columns.length;
	const setColSpan = (moveNext$1) => {
		for (const column of colSpanColumns) {
			const colIdx = column.idx;
			if (colIdx > nextIdx) break;
			const colSpan = getSelectedCellColSpan({
				rows,
				topSummaryRows,
				bottomSummaryRows,
				rowIdx: nextRowIdx,
				mainHeaderRowIdx,
				lastFrozenColumnIndex,
				column
			});
			if (colSpan && nextIdx > colIdx && nextIdx < colSpan + colIdx) {
				nextIdx = colIdx + (moveNext$1 ? colSpan : 0);
				break;
			}
		}
	};
	const getParentRowIdx = (parent) => {
		return parent.level + mainHeaderRowIdx;
	};
	const setHeaderGroupColAndRowSpan = () => {
		if (moveNext) {
			const nextColumn = columns[nextIdx];
			let parent = nextColumn.parent;
			while (parent !== void 0) {
				const parentRowIdx = getParentRowIdx(parent);
				if (nextRowIdx === parentRowIdx) {
					nextIdx = parent.idx + parent.colSpan;
					break;
				}
				parent = parent.parent;
			}
		} else if (moveUp) {
			const nextColumn = columns[nextIdx];
			let parent = nextColumn.parent;
			let found = false;
			while (parent !== void 0) {
				const parentRowIdx = getParentRowIdx(parent);
				if (nextRowIdx >= parentRowIdx) {
					nextIdx = parent.idx;
					nextRowIdx = parentRowIdx;
					found = true;
					break;
				}
				parent = parent.parent;
			}
			if (!found) {
				nextIdx = currentIdx;
				nextRowIdx = currentRowIdx;
			}
		}
	};
	if (isCellWithinBounds(nextPosition)) {
		setColSpan(moveNext);
		if (nextRowIdx < mainHeaderRowIdx) setHeaderGroupColAndRowSpan();
	}
	if (cellNavigationMode === "CHANGE_ROW") {
		const isAfterLastColumn = nextIdx === columnsCount;
		const isBeforeFirstColumn = nextIdx === -1;
		if (isAfterLastColumn) {
			const isLastRow = nextRowIdx === maxRowIdx;
			if (!isLastRow) {
				nextIdx = 0;
				nextRowIdx += 1;
			}
		} else if (isBeforeFirstColumn) {
			const isFirstRow = nextRowIdx === minRowIdx;
			if (!isFirstRow) {
				nextRowIdx -= 1;
				nextIdx = columnsCount - 1;
			}
			setColSpan(false);
		}
	}
	if (nextRowIdx < mainHeaderRowIdx && nextIdx > -1 && nextIdx < columnsCount) {
		const nextColumn = columns[nextIdx];
		let parent = nextColumn.parent;
		const nextParentRowIdx = nextRowIdx;
		nextRowIdx = mainHeaderRowIdx;
		while (parent !== void 0) {
			const parentRowIdx = getParentRowIdx(parent);
			if (parentRowIdx >= nextParentRowIdx) {
				nextRowIdx = parentRowIdx;
				nextIdx = parent.idx;
			}
			parent = parent.parent;
		}
	}
	return {
		idx: nextIdx,
		rowIdx: nextRowIdx
	};
}
function canExitGrid({ maxColIdx, minRowIdx, maxRowIdx, selectedPosition: { rowIdx, idx }, shiftKey }) {
	const atLastCellInRow = idx === maxColIdx;
	const atFirstCellInRow = idx === 0;
	const atLastRow = rowIdx === maxRowIdx;
	const atFirstRow = rowIdx === minRowIdx;
	return shiftKey ? atFirstCellInRow && atFirstRow : atLastCellInRow && atLastRow;
}

//#endregion
//#region src/style/cell.ts
const cell = "cj343x07-0-0-beta-52";
const cellClassname = `rdg-cell ${cell}`;
const cellFrozen = "csofj7r7-0-0-beta-52";
const cellFrozenClassname = `rdg-cell-frozen ${cellFrozen}`;
const cellDragHandle = "ch2wcw87-0-0-beta-52";
const cellDragHandleFrozenClassname = "c1wvphzh7-0-0-beta-52";
const cellDragHandleClassname = `rdg-cell-drag-handle ${cellDragHandle}`;

//#endregion
//#region src/utils/styleUtils.ts
function getRowStyle(rowIdx) {
	return { "--rdg-grid-row-start": rowIdx };
}
function getHeaderCellStyle(column, rowIdx, rowSpan) {
	const gridRowEnd = rowIdx + 1;
	const paddingBlockStart = `calc(${rowSpan - 1} * var(--rdg-header-row-height))`;
	if (column.parent === void 0) return {
		insetBlockStart: 0,
		gridRowStart: 1,
		gridRowEnd,
		paddingBlockStart
	};
	return {
		insetBlockStart: `calc(${rowIdx - rowSpan} * var(--rdg-header-row-height))`,
		gridRowStart: gridRowEnd - rowSpan,
		gridRowEnd,
		paddingBlockStart
	};
}
function getCellStyle(column, colSpan = 1) {
	const index = column.idx + 1;
	return {
		gridColumnStart: index,
		gridColumnEnd: index + colSpan,
		insetInlineStart: column.frozen ? `var(--rdg-frozen-left-${column.idx})` : void 0
	};
}
function getCellClassname(column, ...extraClasses) {
	return clsx_default(cellClassname, { [cellFrozenClassname]: column.frozen }, ...extraClasses);
}

//#endregion
//#region src/utils/index.ts
const { min, max, floor, sign, abs } = Math;
function assertIsValidKeyGetter(keyGetter) {
	if (typeof keyGetter !== "function") throw new Error("Please specify the rowKeyGetter prop to use selection");
}
function clampColumnWidth(width, { minWidth, maxWidth }) {
	width = max(width, minWidth);
	if (typeof maxWidth === "number" && maxWidth >= minWidth) return min(width, maxWidth);
	return width;
}
function getHeaderCellRowSpan(column, rowIdx) {
	return column.parent === void 0 ? rowIdx : column.level - column.parent.level;
}

//#endregion
//#region src/cellRenderers/renderCheckbox.tsx
var import_jsx_runtime$19 = __toESM(require_jsx_runtime(), 1);
const checkbox = "c1bn88vv7-0-0-beta-52";
const checkboxClassname = `rdg-checkbox-input ${checkbox}`;
function renderCheckbox({ onChange, indeterminate,...props }) {
	function handleChange(e) {
		onChange(e.target.checked, e.nativeEvent.shiftKey);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime$19.jsx)("input", {
		ref: (el) => {
			if (el) el.indeterminate = indeterminate === true;
		},
		type: "checkbox",
		className: checkboxClassname,
		onChange: handleChange,
		...props
	});
}

//#endregion
//#region src/cellRenderers/renderToggleGroup.tsx
var import_jsx_runtime$18 = __toESM(require_jsx_runtime(), 1);
const groupCellContent = "g1s9ylgp7-0-0-beta-52";
const groupCellContentClassname = `rdg-group-cell-content ${groupCellContent}`;
const caret = "cz54e4y7-0-0-beta-52";
const caretClassname = `rdg-caret ${caret}`;
function renderToggleGroup(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime$18.jsx)(ToggleGroup, { ...props });
}
function ToggleGroup({ groupKey, isExpanded, tabIndex, toggleGroup }) {
	function handleKeyDown({ key }) {
		if (key === "Enter") toggleGroup();
	}
	const d = isExpanded ? "M1 1 L 7 7 L 13 1" : "M1 7 L 7 1 L 13 7";
	return /* @__PURE__ */ (0, import_jsx_runtime$18.jsxs)("span", {
		className: groupCellContentClassname,
		tabIndex,
		onKeyDown: handleKeyDown,
		children: [groupKey, /* @__PURE__ */ (0, import_jsx_runtime$18.jsx)("svg", {
			viewBox: "0 0 14 8",
			width: "14",
			height: "8",
			className: caretClassname,
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime$18.jsx)("path", { d })
		})]
	});
}

//#endregion
//#region src/cellRenderers/renderValue.tsx
function renderValue(props) {
	try {
		return props.row[props.column.key];
	} catch {
		return null;
	}
}

//#endregion
//#region src/DataGridDefaultRenderersContext.ts
var import_react$21 = __toESM(require_react());
const DataGridDefaultRenderersContext = (0, import_react$21.createContext)(void 0);
function useDefaultRenderers() {
	return (0, import_react$21.useContext)(DataGridDefaultRenderersContext);
}

//#endregion
//#region src/cellRenderers/SelectCellFormatter.tsx
function SelectCellFormatter({ value, tabIndex, indeterminate, disabled, onChange, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy }) {
	const renderCheckbox$1 = useDefaultRenderers().renderCheckbox;
	return renderCheckbox$1({
		"aria-label": ariaLabel,
		"aria-labelledby": ariaLabelledBy,
		tabIndex,
		indeterminate,
		disabled,
		checked: value,
		onChange
	});
}

//#endregion
//#region src/hooks/useRowSelection.ts
var import_react$20 = __toESM(require_react(), 1);
const RowSelectionContext = (0, import_react$20.createContext)(void 0);
const RowSelectionChangeContext = (0, import_react$20.createContext)(void 0);
function useRowSelection() {
	const rowSelectionContext = (0, import_react$20.useContext)(RowSelectionContext);
	const rowSelectionChangeContext = (0, import_react$20.useContext)(RowSelectionChangeContext);
	if (rowSelectionContext === void 0 || rowSelectionChangeContext === void 0) throw new Error("useRowSelection must be used within renderCell");
	return {
		isRowSelectionDisabled: rowSelectionContext.isRowSelectionDisabled,
		isRowSelected: rowSelectionContext.isRowSelected,
		onRowSelectionChange: rowSelectionChangeContext
	};
}
const HeaderRowSelectionContext = (0, import_react$20.createContext)(void 0);
const HeaderRowSelectionChangeContext = (0, import_react$20.createContext)(void 0);
function useHeaderRowSelection() {
	const headerRowSelectionContext = (0, import_react$20.useContext)(HeaderRowSelectionContext);
	const headerRowSelectionChangeContext = (0, import_react$20.useContext)(HeaderRowSelectionChangeContext);
	if (headerRowSelectionContext === void 0 || headerRowSelectionChangeContext === void 0) throw new Error("useHeaderRowSelection must be used within renderHeaderCell");
	return {
		isIndeterminate: headerRowSelectionContext.isIndeterminate,
		isRowSelected: headerRowSelectionContext.isRowSelected,
		onRowSelectionChange: headerRowSelectionChangeContext
	};
}

//#endregion
//#region src/Columns.tsx
var import_jsx_runtime$17 = __toESM(require_jsx_runtime());
const SELECT_COLUMN_KEY = "rdg-select-column";
function HeaderRenderer(props) {
	const { isIndeterminate, isRowSelected, onRowSelectionChange } = useHeaderRowSelection();
	return /* @__PURE__ */ (0, import_jsx_runtime$17.jsx)(SelectCellFormatter, {
		"aria-label": "Select All",
		tabIndex: props.tabIndex,
		indeterminate: isIndeterminate,
		value: isRowSelected,
		onChange: (checked) => {
			onRowSelectionChange({ checked: isIndeterminate ? false : checked });
		}
	});
}
function SelectFormatter(props) {
	const { isRowSelectionDisabled, isRowSelected, onRowSelectionChange } = useRowSelection();
	return /* @__PURE__ */ (0, import_jsx_runtime$17.jsx)(SelectCellFormatter, {
		"aria-label": "Select",
		tabIndex: props.tabIndex,
		disabled: isRowSelectionDisabled,
		value: isRowSelected,
		onChange: (checked, isShiftClick) => {
			onRowSelectionChange({
				row: props.row,
				checked,
				isShiftClick
			});
		}
	});
}
function SelectGroupFormatter(props) {
	const { isRowSelected, onRowSelectionChange } = useRowSelection();
	return /* @__PURE__ */ (0, import_jsx_runtime$17.jsx)(SelectCellFormatter, {
		"aria-label": "Select Group",
		tabIndex: props.tabIndex,
		value: isRowSelected,
		onChange: (checked) => {
			onRowSelectionChange({
				row: props.row,
				checked,
				isShiftClick: false
			});
		}
	});
}
const SelectColumn = {
	key: SELECT_COLUMN_KEY,
	name: "",
	width: 35,
	minWidth: 35,
	maxWidth: 35,
	resizable: false,
	sortable: false,
	frozen: true,
	renderHeaderCell(props) {
		return /* @__PURE__ */ (0, import_jsx_runtime$17.jsx)(HeaderRenderer, { ...props });
	},
	renderCell(props) {
		return /* @__PURE__ */ (0, import_jsx_runtime$17.jsx)(SelectFormatter, { ...props });
	},
	renderGroupCell(props) {
		return /* @__PURE__ */ (0, import_jsx_runtime$17.jsx)(SelectGroupFormatter, { ...props });
	}
};

//#endregion
//#region src/renderHeaderCell.tsx
var import_jsx_runtime$16 = __toESM(require_jsx_runtime());
const headerSortCellClassname = "h44jtk67-0-0-beta-52";
const headerSortName = "hcgkhxz7-0-0-beta-52";
const headerSortNameClassname = `rdg-header-sort-name ${headerSortName}`;
function renderHeaderCell({ column, sortDirection, priority }) {
	if (!column.sortable) return column.name;
	return /* @__PURE__ */ (0, import_jsx_runtime$16.jsx)(SortableHeaderCell, {
		sortDirection,
		priority,
		children: column.name
	});
}
function SortableHeaderCell({ sortDirection, priority, children }) {
	const renderSortStatus$1 = useDefaultRenderers().renderSortStatus;
	return /* @__PURE__ */ (0, import_jsx_runtime$16.jsxs)("span", {
		className: headerSortCellClassname,
		children: [/* @__PURE__ */ (0, import_jsx_runtime$16.jsx)("span", {
			className: headerSortNameClassname,
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime$16.jsx)("span", { children: renderSortStatus$1({
			sortDirection,
			priority
		}) })]
	});
}

//#endregion
//#region src/hooks/useCalculatedColumns.ts
var import_react$19 = __toESM(require_react(), 1);
const DEFAULT_COLUMN_WIDTH = "auto";
const DEFAULT_COLUMN_MIN_WIDTH = 50;
function useCalculatedColumns({ rawColumns, defaultColumnOptions, getColumnWidth, viewportWidth, scrollLeft, enableVirtualization }) {
	const defaultWidth = defaultColumnOptions?.width ?? DEFAULT_COLUMN_WIDTH;
	const defaultMinWidth = defaultColumnOptions?.minWidth ?? DEFAULT_COLUMN_MIN_WIDTH;
	const defaultMaxWidth = defaultColumnOptions?.maxWidth ?? void 0;
	const defaultRenderCell$1 = defaultColumnOptions?.renderCell ?? renderValue;
	const defaultRenderHeaderCell = defaultColumnOptions?.renderHeaderCell ?? renderHeaderCell;
	const defaultSortable = defaultColumnOptions?.sortable ?? false;
	const defaultResizable = defaultColumnOptions?.resizable ?? false;
	const defaultDraggable = defaultColumnOptions?.draggable ?? false;
	const { columns, colSpanColumns, lastFrozenColumnIndex, headerRowsCount } = (0, import_react$19.useMemo)(() => {
		let lastFrozenColumnIndex$1 = -1;
		let headerRowsCount$1 = 1;
		const columns$1 = [];
		collectColumns(rawColumns, 1);
		function collectColumns(rawColumns$1, level, parent) {
			for (const rawColumn of rawColumns$1) {
				if ("children" in rawColumn) {
					const calculatedColumnParent = {
						name: rawColumn.name,
						parent,
						idx: -1,
						colSpan: 0,
						level: 0,
						headerCellClass: rawColumn.headerCellClass
					};
					collectColumns(rawColumn.children, level + 1, calculatedColumnParent);
					continue;
				}
				const frozen = rawColumn.frozen ?? false;
				const column = {
					...rawColumn,
					parent,
					idx: 0,
					level: 0,
					frozen,
					width: rawColumn.width ?? defaultWidth,
					minWidth: rawColumn.minWidth ?? defaultMinWidth,
					maxWidth: rawColumn.maxWidth ?? defaultMaxWidth,
					sortable: rawColumn.sortable ?? defaultSortable,
					resizable: rawColumn.resizable ?? defaultResizable,
					draggable: rawColumn.draggable ?? defaultDraggable,
					renderCell: rawColumn.renderCell ?? defaultRenderCell$1,
					renderHeaderCell: rawColumn.renderHeaderCell ?? defaultRenderHeaderCell
				};
				columns$1.push(column);
				if (frozen) lastFrozenColumnIndex$1++;
				if (level > headerRowsCount$1) headerRowsCount$1 = level;
			}
		}
		columns$1.sort(({ key: aKey, frozen: frozenA }, { key: bKey, frozen: frozenB }) => {
			if (aKey === SELECT_COLUMN_KEY) return -1;
			if (bKey === SELECT_COLUMN_KEY) return 1;
			if (frozenA) {
				if (frozenB) return 0;
				return -1;
			}
			if (frozenB) return 1;
			return 0;
		});
		const colSpanColumns$1 = [];
		columns$1.forEach((column, idx) => {
			column.idx = idx;
			updateColumnParent(column, idx, 0);
			if (column.colSpan != null) colSpanColumns$1.push(column);
		});
		return {
			columns: columns$1,
			colSpanColumns: colSpanColumns$1,
			lastFrozenColumnIndex: lastFrozenColumnIndex$1,
			headerRowsCount: headerRowsCount$1
		};
	}, [
		rawColumns,
		defaultWidth,
		defaultMinWidth,
		defaultMaxWidth,
		defaultRenderCell$1,
		defaultRenderHeaderCell,
		defaultResizable,
		defaultSortable,
		defaultDraggable
	]);
	const { templateColumns, layoutCssVars, totalFrozenColumnWidth, columnMetrics } = (0, import_react$19.useMemo)(() => {
		const columnMetrics$1 = new Map();
		let left = 0;
		let totalFrozenColumnWidth$1 = 0;
		const templateColumns$1 = [];
		for (const column of columns) {
			let width = getColumnWidth(column);
			if (typeof width === "number") width = clampColumnWidth(width, column);
			else width = column.minWidth;
			templateColumns$1.push(`${width}px`);
			columnMetrics$1.set(column, {
				width,
				left
			});
			left += width;
		}
		if (lastFrozenColumnIndex !== -1) {
			const columnMetric = columnMetrics$1.get(columns[lastFrozenColumnIndex]);
			totalFrozenColumnWidth$1 = columnMetric.left + columnMetric.width;
		}
		const layoutCssVars$1 = {};
		for (let i = 0; i <= lastFrozenColumnIndex; i++) {
			const column = columns[i];
			layoutCssVars$1[`--rdg-frozen-left-${column.idx}`] = `${columnMetrics$1.get(column).left}px`;
		}
		return {
			templateColumns: templateColumns$1,
			layoutCssVars: layoutCssVars$1,
			totalFrozenColumnWidth: totalFrozenColumnWidth$1,
			columnMetrics: columnMetrics$1
		};
	}, [
		getColumnWidth,
		columns,
		lastFrozenColumnIndex
	]);
	const [colOverscanStartIdx, colOverscanEndIdx] = (0, import_react$19.useMemo)(() => {
		if (!enableVirtualization) return [0, columns.length - 1];
		const viewportLeft = scrollLeft + totalFrozenColumnWidth;
		const viewportRight = scrollLeft + viewportWidth;
		const lastColIdx = columns.length - 1;
		const firstUnfrozenColumnIdx = min(lastFrozenColumnIndex + 1, lastColIdx);
		if (viewportLeft >= viewportRight) return [firstUnfrozenColumnIdx, firstUnfrozenColumnIdx];
		let colVisibleStartIdx = firstUnfrozenColumnIdx;
		while (colVisibleStartIdx < lastColIdx) {
			const { left, width } = columnMetrics.get(columns[colVisibleStartIdx]);
			if (left + width > viewportLeft) break;
			colVisibleStartIdx++;
		}
		let colVisibleEndIdx = colVisibleStartIdx;
		while (colVisibleEndIdx < lastColIdx) {
			const { left, width } = columnMetrics.get(columns[colVisibleEndIdx]);
			if (left + width >= viewportRight) break;
			colVisibleEndIdx++;
		}
		const colOverscanStartIdx$1 = max(firstUnfrozenColumnIdx, colVisibleStartIdx - 1);
		const colOverscanEndIdx$1 = min(lastColIdx, colVisibleEndIdx + 1);
		return [colOverscanStartIdx$1, colOverscanEndIdx$1];
	}, [
		columnMetrics,
		columns,
		lastFrozenColumnIndex,
		scrollLeft,
		totalFrozenColumnWidth,
		viewportWidth,
		enableVirtualization
	]);
	return {
		columns,
		colSpanColumns,
		colOverscanStartIdx,
		colOverscanEndIdx,
		templateColumns,
		layoutCssVars,
		headerRowsCount,
		lastFrozenColumnIndex,
		totalFrozenColumnWidth
	};
}
function updateColumnParent(column, index, level) {
	if (level < column.level) column.level = level;
	if (column.parent !== void 0) {
		const { parent } = column;
		if (parent.idx === -1) parent.idx = index;
		parent.colSpan += 1;
		updateColumnParent(parent, index, level - 1);
	}
}

//#endregion
//#region src/hooks/useColumnWidths.ts
var import_react$18 = __toESM(require_react(), 1);
var import_react_dom$3 = __toESM(require_react_dom(), 1);
function useColumnWidths(columns, viewportColumns, templateColumns, gridRef, gridWidth, columnWidths, onColumnWidthsChange, onColumnResize, setColumnResizing) {
	const [columnToAutoResize, setColumnToAutoResize] = (0, import_react$18.useState)(null);
	const [columnsToMeasureOnResize, setColumnsToMeasureOnResize] = (0, import_react$18.useState)(null);
	const [prevGridWidth, setPreviousGridWidth] = (0, import_react$18.useState)(gridWidth);
	const columnsCanFlex = columns.length === viewportColumns.length;
	const ignorePreviouslyMeasuredColumnsOnGridWidthChange = columnsCanFlex && gridWidth !== prevGridWidth;
	const newTemplateColumns = [...templateColumns];
	const columnsToMeasure = [];
	for (const { key, idx, width } of viewportColumns) {
		const columnWidth = columnWidths.get(key);
		if (key === columnToAutoResize?.key) {
			newTemplateColumns[idx] = columnToAutoResize.width === "max-content" ? columnToAutoResize.width : `${columnToAutoResize.width}px`;
			columnsToMeasure.push(key);
		} else if (typeof width === "string" && columnWidth?.type !== "resized" && (ignorePreviouslyMeasuredColumnsOnGridWidthChange || columnsToMeasureOnResize?.has(key) === true || columnWidth === void 0)) {
			newTemplateColumns[idx] = width;
			columnsToMeasure.push(key);
		}
	}
	const gridTemplateColumns = newTemplateColumns.join(" ");
	(0, import_react$18.useLayoutEffect)(updateMeasuredAndResizedWidths);
	function updateMeasuredAndResizedWidths() {
		setPreviousGridWidth(gridWidth);
		if (columnsToMeasure.length === 0) return;
		const newColumnWidths = new Map(columnWidths);
		let hasChanges = false;
		for (const key of columnsToMeasure) {
			const measuredWidth = measureColumnWidth(gridRef, key);
			hasChanges ||= measuredWidth !== columnWidths.get(key)?.width;
			if (measuredWidth === void 0) newColumnWidths.delete(key);
			else newColumnWidths.set(key, {
				type: "measured",
				width: measuredWidth
			});
		}
		if (columnToAutoResize !== null) {
			const resizingKey = columnToAutoResize.key;
			const oldWidth = columnWidths.get(resizingKey)?.width;
			const newWidth = measureColumnWidth(gridRef, resizingKey);
			if (newWidth !== void 0 && oldWidth !== newWidth) {
				hasChanges = true;
				newColumnWidths.set(resizingKey, {
					type: "resized",
					width: newWidth
				});
			}
			setColumnToAutoResize(null);
		}
		if (hasChanges) onColumnWidthsChange(newColumnWidths);
	}
	function handleColumnResize(column, nextWidth) {
		const { key: resizingKey } = column;
		(0, import_react_dom$3.flushSync)(() => {
			if (columnsCanFlex) {
				const columnsToRemeasure = new Set();
				for (const { key, width } of viewportColumns) if (resizingKey !== key && typeof width === "string" && columnWidths.get(key)?.type !== "resized") columnsToRemeasure.add(key);
				setColumnsToMeasureOnResize(columnsToRemeasure);
			}
			setColumnToAutoResize({
				key: resizingKey,
				width: nextWidth
			});
			setColumnResizing(typeof nextWidth === "number");
		});
		setColumnsToMeasureOnResize(null);
		if (onColumnResize) {
			const previousWidth = columnWidths.get(resizingKey)?.width;
			const newWidth = typeof nextWidth === "number" ? nextWidth : measureColumnWidth(gridRef, resizingKey);
			if (newWidth !== void 0 && newWidth !== previousWidth) onColumnResize(column, newWidth);
		}
	}
	return {
		gridTemplateColumns,
		handleColumnResize
	};
}
function measureColumnWidth(gridRef, key) {
	const selector = `[data-measuring-cell-key="${CSS.escape(key)}"]`;
	const measuringCell = gridRef.current?.querySelector(selector);
	return measuringCell?.getBoundingClientRect().width;
}

//#endregion
//#region src/hooks/useGridDimensions.ts
var import_react$17 = __toESM(require_react(), 1);
var import_react_dom$2 = __toESM(require_react_dom(), 1);
function useGridDimensions() {
	const gridRef = (0, import_react$17.useRef)(null);
	const [inlineSize, setInlineSize] = (0, import_react$17.useState)(1);
	const [blockSize, setBlockSize] = (0, import_react$17.useState)(1);
	const [horizontalScrollbarHeight, setHorizontalScrollbarHeight] = (0, import_react$17.useState)(0);
	(0, import_react$17.useLayoutEffect)(() => {
		const { ResizeObserver } = window;
		if (ResizeObserver == null) return;
		const { clientWidth, clientHeight, offsetWidth, offsetHeight } = gridRef.current;
		const { width, height } = gridRef.current.getBoundingClientRect();
		const initialHorizontalScrollbarHeight = offsetHeight - clientHeight;
		const initialWidth = width - offsetWidth + clientWidth;
		const initialHeight = height - initialHorizontalScrollbarHeight;
		setInlineSize(initialWidth);
		setBlockSize(initialHeight);
		setHorizontalScrollbarHeight(initialHorizontalScrollbarHeight);
		const resizeObserver = new ResizeObserver((entries) => {
			const size = entries[0].contentBoxSize[0];
			const { clientHeight: clientHeight$1, offsetHeight: offsetHeight$1 } = gridRef.current;
			(0, import_react_dom$2.flushSync)(() => {
				setInlineSize(size.inlineSize);
				setBlockSize(size.blockSize);
				setHorizontalScrollbarHeight(offsetHeight$1 - clientHeight$1);
			});
		});
		resizeObserver.observe(gridRef.current);
		return () => {
			resizeObserver.disconnect();
		};
	}, []);
	return [
		gridRef,
		inlineSize,
		blockSize,
		horizontalScrollbarHeight
	];
}

//#endregion
//#region src/hooks/useLatestFunc.ts
var import_react$16 = __toESM(require_react(), 1);
function useLatestFunc(fn) {
	const ref = (0, import_react$16.useRef)(fn);
	(0, import_react$16.useEffect)(() => {
		ref.current = fn;
	});
	const callbackFn = (0, import_react$16.useCallback)((...args) => {
		ref.current(...args);
	}, []);
	return fn ? callbackFn : fn;
}

//#endregion
//#region src/hooks/useRovingTabIndex.ts
var import_react$15 = __toESM(require_react(), 1);
function useRovingTabIndex(isSelected) {
	const [isChildFocused, setIsChildFocused] = (0, import_react$15.useState)(false);
	if (isChildFocused && !isSelected) setIsChildFocused(false);
	function onFocus(event) {
		if (event.target !== event.currentTarget) setIsChildFocused(true);
	}
	const isFocusable = isSelected && !isChildFocused;
	return {
		tabIndex: isFocusable ? 0 : -1,
		childTabIndex: isSelected ? 0 : -1,
		onFocus: isSelected ? onFocus : void 0
	};
}

//#endregion
//#region src/hooks/useViewportColumns.ts
var import_react$14 = __toESM(require_react(), 1);
function useViewportColumns({ columns, colSpanColumns, rows, topSummaryRows, bottomSummaryRows, colOverscanStartIdx, colOverscanEndIdx, lastFrozenColumnIndex, rowOverscanStartIdx, rowOverscanEndIdx }) {
	const startIdx = (0, import_react$14.useMemo)(() => {
		if (colOverscanStartIdx === 0) return 0;
		let startIdx$1 = colOverscanStartIdx;
		const updateStartIdx = (colIdx, colSpan) => {
			if (colSpan !== void 0 && colIdx + colSpan > colOverscanStartIdx) {
				startIdx$1 = colIdx;
				return true;
			}
			return false;
		};
		for (const column of colSpanColumns) {
			const colIdx = column.idx;
			if (colIdx >= startIdx$1) break;
			if (updateStartIdx(colIdx, getColSpan(column, lastFrozenColumnIndex, { type: "HEADER" }))) break;
			for (let rowIdx = rowOverscanStartIdx; rowIdx <= rowOverscanEndIdx; rowIdx++) {
				const row$1 = rows[rowIdx];
				if (updateStartIdx(colIdx, getColSpan(column, lastFrozenColumnIndex, {
					type: "ROW",
					row: row$1
				}))) break;
			}
			if (topSummaryRows != null) {
				for (const row$1 of topSummaryRows) if (updateStartIdx(colIdx, getColSpan(column, lastFrozenColumnIndex, {
					type: "SUMMARY",
					row: row$1
				}))) break;
			}
			if (bottomSummaryRows != null) {
				for (const row$1 of bottomSummaryRows) if (updateStartIdx(colIdx, getColSpan(column, lastFrozenColumnIndex, {
					type: "SUMMARY",
					row: row$1
				}))) break;
			}
		}
		return startIdx$1;
	}, [
		rowOverscanStartIdx,
		rowOverscanEndIdx,
		rows,
		topSummaryRows,
		bottomSummaryRows,
		colOverscanStartIdx,
		lastFrozenColumnIndex,
		colSpanColumns
	]);
	return (0, import_react$14.useMemo)(() => {
		const viewportColumns = [];
		for (let colIdx = 0; colIdx <= colOverscanEndIdx; colIdx++) {
			const column = columns[colIdx];
			if (colIdx < startIdx && !column.frozen) continue;
			viewportColumns.push(column);
		}
		return viewportColumns;
	}, [
		startIdx,
		colOverscanEndIdx,
		columns
	]);
}

//#endregion
//#region src/hooks/useViewportRows.ts
var import_react$13 = __toESM(require_react(), 1);
function useViewportRows({ rows, rowHeight, clientHeight, scrollTop, enableVirtualization }) {
	const { totalRowHeight, gridTemplateRows, getRowTop, getRowHeight, findRowIdx } = (0, import_react$13.useMemo)(() => {
		if (typeof rowHeight === "number") return {
			totalRowHeight: rowHeight * rows.length,
			gridTemplateRows: ` repeat(${rows.length}, ${rowHeight}px)`,
			getRowTop: (rowIdx) => rowIdx * rowHeight,
			getRowHeight: () => rowHeight,
			findRowIdx: (offset) => floor(offset / rowHeight)
		};
		let totalRowHeight$1 = 0;
		let gridTemplateRows$1 = " ";
		const rowPositions = rows.map((row$1) => {
			const currentRowHeight = rowHeight(row$1);
			const position = {
				top: totalRowHeight$1,
				height: currentRowHeight
			};
			gridTemplateRows$1 += `${currentRowHeight}px `;
			totalRowHeight$1 += currentRowHeight;
			return position;
		});
		const validateRowIdx = (rowIdx) => {
			return max(0, min(rows.length - 1, rowIdx));
		};
		return {
			totalRowHeight: totalRowHeight$1,
			gridTemplateRows: gridTemplateRows$1,
			getRowTop: (rowIdx) => rowPositions[validateRowIdx(rowIdx)].top,
			getRowHeight: (rowIdx) => rowPositions[validateRowIdx(rowIdx)].height,
			findRowIdx(offset) {
				let start = 0;
				let end = rowPositions.length - 1;
				while (start <= end) {
					const middle = start + floor((end - start) / 2);
					const currentOffset = rowPositions[middle].top;
					if (currentOffset === offset) return middle;
					if (currentOffset < offset) start = middle + 1;
					else if (currentOffset > offset) end = middle - 1;
					if (start > end) return end;
				}
				return 0;
			}
		};
	}, [rowHeight, rows]);
	let rowOverscanStartIdx = 0;
	let rowOverscanEndIdx = rows.length - 1;
	if (enableVirtualization) {
		const overscanThreshold = 4;
		const rowVisibleStartIdx = findRowIdx(scrollTop);
		const rowVisibleEndIdx = findRowIdx(scrollTop + clientHeight);
		rowOverscanStartIdx = max(0, rowVisibleStartIdx - overscanThreshold);
		rowOverscanEndIdx = min(rows.length - 1, rowVisibleEndIdx + overscanThreshold);
	}
	return {
		rowOverscanStartIdx,
		rowOverscanEndIdx,
		totalRowHeight,
		gridTemplateRows,
		getRowTop,
		getRowHeight,
		findRowIdx
	};
}

//#endregion
//#region src/Cell.tsx
var import_react$12 = __toESM(require_react());
var import_jsx_runtime$15 = __toESM(require_jsx_runtime());
const cellDraggedOver = "c6ra8a37-0-0-beta-52";
const cellDraggedOverClassname = `rdg-cell-dragged-over ${cellDraggedOver}`;
function Cell({ column, colSpan, isCellSelected, isDraggedOver, row: row$1, rowIdx, className, onMouseDown, onCellMouseDown, onClick, onCellClick, onDoubleClick, onCellDoubleClick, onContextMenu, onCellContextMenu, onRowChange, selectCell, style,...props }) {
	const { tabIndex, childTabIndex, onFocus } = useRovingTabIndex(isCellSelected);
	const { cellClass } = column;
	className = getCellClassname(column, { [cellDraggedOverClassname]: isDraggedOver }, typeof cellClass === "function" ? cellClass(row$1) : cellClass, className);
	const isEditable = isCellEditableUtil(column, row$1);
	function selectCellWrapper(openEditor) {
		selectCell({
			rowIdx,
			idx: column.idx
		}, openEditor);
	}
	function handleMouseEvent(event, eventHandler) {
		let eventHandled = false;
		if (eventHandler) {
			const cellEvent = createCellEvent(event);
			eventHandler({
				rowIdx,
				row: row$1,
				column,
				selectCell: selectCellWrapper
			}, cellEvent);
			eventHandled = cellEvent.isGridDefaultPrevented();
		}
		return eventHandled;
	}
	function handleMouseDown(event) {
		onMouseDown?.(event);
		if (!handleMouseEvent(event, onCellMouseDown)) selectCellWrapper();
	}
	function handleClick(event) {
		onClick?.(event);
		handleMouseEvent(event, onCellClick);
	}
	function handleDoubleClick(event) {
		onDoubleClick?.(event);
		if (!handleMouseEvent(event, onCellDoubleClick)) selectCellWrapper(true);
	}
	function handleContextMenu(event) {
		onContextMenu?.(event);
		handleMouseEvent(event, onCellContextMenu);
	}
	function handleRowChange(newRow) {
		onRowChange(column, newRow);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime$15.jsx)("div", {
		role: "gridcell",
		"aria-colindex": column.idx + 1,
		"aria-colspan": colSpan,
		"aria-selected": isCellSelected,
		"aria-readonly": !isEditable || void 0,
		tabIndex,
		className,
		style: {
			...getCellStyle(column, colSpan),
			...style
		},
		onClick: handleClick,
		onMouseDown: handleMouseDown,
		onDoubleClick: handleDoubleClick,
		onContextMenu: handleContextMenu,
		onFocus,
		...props,
		children: column.renderCell({
			column,
			row: row$1,
			rowIdx,
			isCellEditable: isEditable,
			tabIndex: childTabIndex,
			onRowChange: handleRowChange
		})
	});
}
const CellComponent = (0, import_react$12.memo)(Cell);
var Cell_default = CellComponent;
function defaultRenderCell(key, props) {
	return /* @__PURE__ */ (0, import_jsx_runtime$15.jsx)(CellComponent, { ...props }, key);
}

//#endregion
//#region src/EditCell.tsx
var import_react$11 = __toESM(require_react(), 1);
var import_jsx_runtime$14 = __toESM(require_jsx_runtime(), 1);
const cellEditing = "cis5rrm7-0-0-beta-52";
function EditCell({ column, colSpan, row: row$1, rowIdx, onRowChange, closeEditor, onKeyDown, navigate }) {
	const frameRequestRef = (0, import_react$11.useRef)(void 0);
	const commitOnOutsideClick = column.editorOptions?.commitOnOutsideClick ?? true;
	const commitOnOutsideMouseDown = useLatestFunc(() => {
		onClose(true, false);
	});
	(0, import_react$11.useEffect)(() => {
		if (!commitOnOutsideClick) return;
		function onWindowCaptureMouseDown() {
			frameRequestRef.current = requestAnimationFrame(commitOnOutsideMouseDown);
		}
		addEventListener("mousedown", onWindowCaptureMouseDown, { capture: true });
		return () => {
			removeEventListener("mousedown", onWindowCaptureMouseDown, { capture: true });
			cancelFrameRequest();
		};
	}, [commitOnOutsideClick, commitOnOutsideMouseDown]);
	function cancelFrameRequest() {
		cancelAnimationFrame(frameRequestRef.current);
	}
	function handleKeyDown(event) {
		if (onKeyDown) {
			const cellEvent = createCellEvent(event);
			onKeyDown({
				mode: "EDIT",
				row: row$1,
				column,
				rowIdx,
				navigate() {
					navigate(event);
				},
				onClose
			}, cellEvent);
			if (cellEvent.isGridDefaultPrevented()) return;
		}
		if (event.key === "Escape") onClose();
		else if (event.key === "Enter") onClose(true);
		else if (onEditorNavigation(event)) navigate(event);
	}
	function onClose(commitChanges = false, shouldFocusCell = true) {
		if (commitChanges) onRowChange(row$1, true, shouldFocusCell);
		else closeEditor(shouldFocusCell);
	}
	function onEditorRowChange(row$2, commitChangesAndFocus = false) {
		onRowChange(row$2, commitChangesAndFocus, commitChangesAndFocus);
	}
	const { cellClass } = column;
	const className = getCellClassname(column, "rdg-editor-container", !column.editorOptions?.displayCellContent && cellEditing, typeof cellClass === "function" ? cellClass(row$1) : cellClass);
	return /* @__PURE__ */ (0, import_jsx_runtime$14.jsx)("div", {
		role: "gridcell",
		"aria-colindex": column.idx + 1,
		"aria-colspan": colSpan,
		"aria-selected": true,
		className,
		style: getCellStyle(column, colSpan),
		onKeyDown: handleKeyDown,
		onMouseDownCapture: cancelFrameRequest,
		children: column.renderEditCell != null && /* @__PURE__ */ (0, import_jsx_runtime$14.jsxs)(import_jsx_runtime$14.Fragment, { children: [column.renderEditCell({
			column,
			row: row$1,
			rowIdx,
			onRowChange: onEditorRowChange,
			onClose
		}), column.editorOptions?.displayCellContent && column.renderCell({
			column,
			row: row$1,
			rowIdx,
			isCellEditable: true,
			tabIndex: -1,
			onRowChange: onEditorRowChange
		})] })
	});
}

//#endregion
//#region src/GroupedColumnHeaderCell.tsx
var import_jsx_runtime$13 = __toESM(require_jsx_runtime(), 1);
function GroupedColumnHeaderCell({ column, rowIdx, isCellSelected, selectCell }) {
	const { tabIndex, onFocus } = useRovingTabIndex(isCellSelected);
	const { colSpan } = column;
	const rowSpan = getHeaderCellRowSpan(column, rowIdx);
	const index = column.idx + 1;
	function onMouseDown() {
		selectCell({
			idx: column.idx,
			rowIdx
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime$13.jsx)("div", {
		role: "columnheader",
		"aria-colindex": index,
		"aria-colspan": colSpan,
		"aria-rowspan": rowSpan,
		"aria-selected": isCellSelected,
		tabIndex,
		className: clsx_default(cellClassname, column.headerCellClass),
		style: {
			...getHeaderCellStyle(column, rowIdx, rowSpan),
			gridColumnStart: index,
			gridColumnEnd: index + colSpan
		},
		onFocus,
		onMouseDown,
		children: column.name
	});
}

//#endregion
//#region src/HeaderCell.tsx
var import_react$10 = __toESM(require_react(), 1);
var import_react_dom$1 = __toESM(require_react_dom(), 1);
var import_jsx_runtime$12 = __toESM(require_jsx_runtime(), 1);
const cellSortableClassname = "c6l2wv17-0-0-beta-52";
const cellResizable = "c1kqdw7y7-0-0-beta-52";
const cellResizableClassname = `rdg-cell-resizable ${cellResizable}`;
const resizeHandleClassname = "r1y6ywlx7-0-0-beta-52";
const cellDraggableClassname = "rdg-cell-draggable";
const cellDragging = "c1bezg5o7-0-0-beta-52";
const cellDraggingClassname = `rdg-cell-dragging ${cellDragging}`;
const cellOver = "c1vc96037-0-0-beta-52";
const cellOverClassname = `rdg-cell-drag-over ${cellOver}`;
const dragImageClassname = "d8rwc9w7-0-0-beta-52";
function HeaderCell({ column, colSpan, rowIdx, isCellSelected, onColumnResize, onColumnResizeEnd, onColumnsReorder, sortColumns, onSortColumnsChange, selectCell, direction, draggedColumnKey, setDraggedColumnKey }) {
	const [isOver, setIsOver] = (0, import_react$10.useState)(false);
	const dragImageRef = (0, import_react$10.useRef)(null);
	const isDragging = draggedColumnKey === column.key;
	const rowSpan = getHeaderCellRowSpan(column, rowIdx);
	const { tabIndex, childTabIndex, onFocus } = useRovingTabIndex(isCellSelected);
	const sortIndex = sortColumns?.findIndex((sort) => sort.columnKey === column.key);
	const sortColumn = sortIndex !== void 0 && sortIndex > -1 ? sortColumns[sortIndex] : void 0;
	const sortDirection = sortColumn?.direction;
	const priority = sortColumn !== void 0 && sortColumns.length > 1 ? sortIndex + 1 : void 0;
	const ariaSort = sortDirection && !priority ? sortDirection === "ASC" ? "ascending" : "descending" : void 0;
	const { sortable, resizable, draggable } = column;
	const className = getCellClassname(column, column.headerCellClass, {
		[cellSortableClassname]: sortable,
		[cellResizableClassname]: resizable,
		[cellDraggableClassname]: draggable,
		[cellDraggingClassname]: isDragging,
		[cellOverClassname]: isOver
	});
	function onSort(ctrlClick) {
		if (onSortColumnsChange == null) return;
		const { sortDescendingFirst } = column;
		if (sortColumn === void 0) {
			const nextSort = {
				columnKey: column.key,
				direction: sortDescendingFirst ? "DESC" : "ASC"
			};
			onSortColumnsChange(sortColumns && ctrlClick ? [...sortColumns, nextSort] : [nextSort]);
		} else {
			let nextSortColumn;
			if (sortDescendingFirst === true && sortDirection === "DESC" || sortDescendingFirst !== true && sortDirection === "ASC") nextSortColumn = {
				columnKey: column.key,
				direction: sortDirection === "ASC" ? "DESC" : "ASC"
			};
			if (ctrlClick) {
				const nextSortColumns = [...sortColumns];
				if (nextSortColumn) nextSortColumns[sortIndex] = nextSortColumn;
				else nextSortColumns.splice(sortIndex, 1);
				onSortColumnsChange(nextSortColumns);
			} else onSortColumnsChange(nextSortColumn ? [nextSortColumn] : []);
		}
	}
	function onMouseDown() {
		selectCell({
			idx: column.idx,
			rowIdx
		});
	}
	function onClick(event) {
		if (sortable) onSort(event.ctrlKey || event.metaKey);
	}
	function onKeyDown(event) {
		const { key } = event;
		if (sortable && (key === " " || key === "Enter")) {
			event.preventDefault();
			onSort(event.ctrlKey || event.metaKey);
		} else if (resizable && isCtrlKeyHeldDown(event) && (key === "ArrowLeft" || key === "ArrowRight")) {
			event.stopPropagation();
			const { width } = event.currentTarget.getBoundingClientRect();
			const { leftKey } = getLeftRightKey(direction);
			const offset = key === leftKey ? -10 : 10;
			const newWidth = clampColumnWidth(width + offset, column);
			if (newWidth !== width) onColumnResize(column, newWidth);
		}
	}
	function onDragStart(event) {
		(0, import_react_dom$1.flushSync)(() => {
			setDraggedColumnKey(column.key);
		});
		event.dataTransfer.setDragImage(dragImageRef.current, 0, 0);
		event.dataTransfer.dropEffect = "move";
	}
	function onDragEnd() {
		setDraggedColumnKey(void 0);
	}
	function onDragOver(event) {
		event.preventDefault();
		event.dataTransfer.dropEffect = "move";
	}
	function onDrop(event) {
		setIsOver(false);
		event.preventDefault();
		onColumnsReorder?.(draggedColumnKey, column.key);
	}
	function onDragEnter(event) {
		if (isEventPertinent(event)) setIsOver(true);
	}
	function onDragLeave(event) {
		if (isEventPertinent(event)) setIsOver(false);
	}
	let dragTargetProps;
	let dropTargetProps;
	if (draggable) {
		dragTargetProps = {
			draggable: true,
			onDragStart,
			onDragEnd
		};
		if (draggedColumnKey !== void 0 && draggedColumnKey !== column.key) dropTargetProps = {
			onDragOver,
			onDragEnter,
			onDragLeave,
			onDrop
		};
	}
	const style = {
		...getHeaderCellStyle(column, rowIdx, rowSpan),
		...getCellStyle(column, colSpan)
	};
	const content = column.renderHeaderCell({
		column,
		sortDirection,
		priority,
		tabIndex: childTabIndex
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$12.jsxs)(import_jsx_runtime$12.Fragment, { children: [isDragging && /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)("div", {
		ref: dragImageRef,
		style,
		className: getCellClassname(column, column.headerCellClass, dragImageClassname),
		children: content
	}), /* @__PURE__ */ (0, import_jsx_runtime$12.jsxs)("div", {
		role: "columnheader",
		"aria-colindex": column.idx + 1,
		"aria-colspan": colSpan,
		"aria-rowspan": rowSpan,
		"aria-selected": isCellSelected,
		"aria-sort": ariaSort,
		tabIndex,
		className,
		style,
		onMouseDown,
		onFocus,
		onClick,
		onKeyDown,
		...dragTargetProps,
		...dropTargetProps,
		children: [content, resizable && /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)(ResizeHandle, {
			direction,
			column,
			onColumnResize,
			onColumnResizeEnd
		})]
	})] });
}
function ResizeHandle({ direction, column, onColumnResize, onColumnResizeEnd }) {
	const resizingOffsetRef = (0, import_react$10.useRef)(void 0);
	const isRtl = direction === "rtl";
	function onPointerDown(event) {
		if (event.pointerType === "mouse" && event.buttons !== 1) return;
		event.preventDefault();
		const { currentTarget, pointerId } = event;
		currentTarget.setPointerCapture(pointerId);
		const headerCell = currentTarget.parentElement;
		const { right, left } = headerCell.getBoundingClientRect();
		resizingOffsetRef.current = isRtl ? event.clientX - left : right - event.clientX;
	}
	function onPointerMove(event) {
		const offset = resizingOffsetRef.current;
		if (offset === void 0) return;
		const { width, right, left } = event.currentTarget.parentElement.getBoundingClientRect();
		let newWidth = isRtl ? right + offset - event.clientX : event.clientX + offset - left;
		newWidth = clampColumnWidth(newWidth, column);
		if (width > 0 && newWidth !== width) onColumnResize(column, newWidth);
	}
	function onLostPointerCapture() {
		onColumnResizeEnd();
		resizingOffsetRef.current = void 0;
	}
	function onDoubleClick() {
		onColumnResize(column, "max-content");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)("div", {
		className: resizeHandleClassname,
		onClick: stopPropagation,
		onPointerDown,
		onPointerMove,
		onLostPointerCapture,
		onDoubleClick
	});
}
function isEventPertinent(event) {
	const relatedTarget = event.relatedTarget;
	return !event.currentTarget.contains(relatedTarget);
}

//#endregion
//#region src/style/row.ts
const row = "r1upfr807-0-0-beta-52";
const rowClassname = `rdg-row ${row}`;
const rowSelected = "r190mhd37-0-0-beta-52";
const rowSelectedClassname = "rdg-row-selected";
const rowSelectedWithFrozenCell = "r139qu9m7-0-0-beta-52";
const topSummaryRowClassname = "rdg-top-summary-row";
const bottomSummaryRowClassname = "rdg-bottom-summary-row";

//#endregion
//#region src/HeaderRow.tsx
var import_react$9 = __toESM(require_react(), 1);
var import_jsx_runtime$11 = __toESM(require_jsx_runtime(), 1);
const headerRow = "h10tskcx7-0-0-beta-52";
const headerRowClassname = `rdg-header-row ${headerRow}`;
function HeaderRow({ headerRowClass, rowIdx, columns, onColumnResize, onColumnResizeEnd, onColumnsReorder, sortColumns, onSortColumnsChange, lastFrozenColumnIndex, selectedCellIdx, selectCell, direction }) {
	const [draggedColumnKey, setDraggedColumnKey] = (0, import_react$9.useState)();
	const cells = [];
	for (let index = 0; index < columns.length; index++) {
		const column = columns[index];
		const colSpan = getColSpan(column, lastFrozenColumnIndex, { type: "HEADER" });
		if (colSpan !== void 0) index += colSpan - 1;
		cells.push(/* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(HeaderCell, {
			column,
			colSpan,
			rowIdx,
			isCellSelected: selectedCellIdx === column.idx,
			onColumnResize,
			onColumnResizeEnd,
			onColumnsReorder,
			onSortColumnsChange,
			sortColumns,
			selectCell,
			direction,
			draggedColumnKey,
			setDraggedColumnKey
		}, column.key));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)("div", {
		role: "row",
		"aria-rowindex": rowIdx,
		className: clsx_default(headerRowClassname, { [rowSelectedClassname]: selectedCellIdx === -1 }, headerRowClass),
		children: cells
	});
}
var HeaderRow_default = (0, import_react$9.memo)(HeaderRow);

//#endregion
//#region src/GroupedColumnHeaderRow.tsx
var import_react$8 = __toESM(require_react(), 1);
var import_jsx_runtime$10 = __toESM(require_jsx_runtime(), 1);
function GroupedColumnHeaderRow({ rowIdx, level, columns, selectedCellIdx, selectCell }) {
	const cells = [];
	const renderedParents = new Set();
	for (const column of columns) {
		let { parent } = column;
		if (parent === void 0) continue;
		while (parent.level > level) {
			if (parent.parent === void 0) break;
			parent = parent.parent;
		}
		if (parent.level === level && !renderedParents.has(parent)) {
			renderedParents.add(parent);
			const { idx } = parent;
			cells.push(/* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(GroupedColumnHeaderCell, {
				column: parent,
				rowIdx,
				isCellSelected: selectedCellIdx === idx,
				selectCell
			}, idx));
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("div", {
		role: "row",
		"aria-rowindex": rowIdx,
		className: headerRowClassname,
		children: cells
	});
}
var GroupedColumnHeaderRow_default = (0, import_react$8.memo)(GroupedColumnHeaderRow);

//#endregion
//#region src/Row.tsx
var import_react$7 = __toESM(require_react());
var import_jsx_runtime$9 = __toESM(require_jsx_runtime());
function Row({ className, rowIdx, gridRowStart, selectedCellIdx, isRowSelectionDisabled, isRowSelected, draggedOverCellIdx, lastFrozenColumnIndex, row: row$1, viewportColumns, selectedCellEditor, onCellMouseDown, onCellClick, onCellDoubleClick, onCellContextMenu, rowClass, onRowChange, selectCell, style,...props }) {
	const renderCell = useDefaultRenderers().renderCell;
	const handleRowChange = useLatestFunc((column, newRow) => {
		onRowChange(column, rowIdx, newRow);
	});
	className = clsx_default(rowClassname, `rdg-row-${rowIdx % 2 === 0 ? "even" : "odd"}`, { [rowSelectedClassname]: selectedCellIdx === -1 }, rowClass?.(row$1, rowIdx), className);
	const cells = [];
	for (let index = 0; index < viewportColumns.length; index++) {
		const column = viewportColumns[index];
		const { idx } = column;
		const colSpan = getColSpan(column, lastFrozenColumnIndex, {
			type: "ROW",
			row: row$1
		});
		if (colSpan !== void 0) index += colSpan - 1;
		const isCellSelected = selectedCellIdx === idx;
		if (isCellSelected && selectedCellEditor) cells.push(selectedCellEditor);
		else cells.push(renderCell(column.key, {
			column,
			colSpan,
			row: row$1,
			rowIdx,
			isDraggedOver: draggedOverCellIdx === idx,
			isCellSelected,
			onCellMouseDown,
			onCellClick,
			onCellDoubleClick,
			onCellContextMenu,
			onRowChange: handleRowChange,
			selectCell
		}));
	}
	const selectionValue = (0, import_react$7.useMemo)(() => ({
		isRowSelected,
		isRowSelectionDisabled
	}), [isRowSelectionDisabled, isRowSelected]);
	return /* @__PURE__ */ (0, import_jsx_runtime$9.jsx)(RowSelectionContext, {
		value: selectionValue,
		children: /* @__PURE__ */ (0, import_jsx_runtime$9.jsx)("div", {
			role: "row",
			className,
			style: {
				...getRowStyle(gridRowStart),
				...style
			},
			...props,
			children: cells
		})
	});
}
const RowComponent = (0, import_react$7.memo)(Row);
var Row_default = RowComponent;
function defaultRenderRow(key, props) {
	return /* @__PURE__ */ (0, import_jsx_runtime$9.jsx)(RowComponent, { ...props }, key);
}

//#endregion
//#region src/ScrollToCell.tsx
var import_react$6 = __toESM(require_react(), 1);
var import_jsx_runtime$8 = __toESM(require_jsx_runtime(), 1);
function ScrollToCell({ scrollToPosition: { idx, rowIdx }, gridRef, setScrollToCellPosition }) {
	const ref = (0, import_react$6.useRef)(null);
	(0, import_react$6.useLayoutEffect)(() => {
		scrollIntoView(ref.current, "auto");
	});
	(0, import_react$6.useLayoutEffect)(() => {
		function removeScrollToCell() {
			setScrollToCellPosition(null);
		}
		const observer = new IntersectionObserver(removeScrollToCell, {
			root: gridRef.current,
			threshold: 1
		});
		observer.observe(ref.current);
		return () => {
			observer.disconnect();
		};
	}, [gridRef, setScrollToCellPosition]);
	return /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)("div", {
		ref,
		style: {
			gridColumn: idx === void 0 ? "1/-1" : idx + 1,
			gridRow: rowIdx === void 0 ? "1/-1" : rowIdx + 2
		}
	});
}

//#endregion
//#region src/sortStatus.tsx
var import_jsx_runtime$7 = __toESM(require_jsx_runtime());
const arrow = "a3ejtar7-0-0-beta-52";
const arrowClassname = `rdg-sort-arrow ${arrow}`;
function renderSortStatus({ sortDirection, priority }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$7.jsxs)(import_jsx_runtime$7.Fragment, { children: [renderSortIcon({ sortDirection }), renderSortPriority({ priority })] });
}
function renderSortIcon({ sortDirection }) {
	if (sortDirection === void 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("svg", {
		viewBox: "0 0 12 8",
		width: "12",
		height: "8",
		className: arrowClassname,
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("path", { d: sortDirection === "ASC" ? "M0 8 6 0 12 8" : "M0 0 6 8 12 0" })
	});
}
function renderSortPriority({ priority }) {
	return priority;
}

//#endregion
//#region src/style/core.ts
const root = "rnvodz57-0-0-beta-52";
const rootClassname = `rdg ${root}`;
const viewportDragging = "vlqv91k7-0-0-beta-52";
const viewportDraggingClassname = `rdg-viewport-dragging ${viewportDragging}`;
const focusSinkClassname = "f1lsfrzw7-0-0-beta-52";
const focusSinkHeaderAndSummaryClassname = "f1cte0lg7-0-0-beta-52";

//#endregion
//#region src/SummaryCell.tsx
var import_react$5 = __toESM(require_react(), 1);
var import_jsx_runtime$6 = __toESM(require_jsx_runtime(), 1);
const summaryCellClassname = "s8wc6fl7-0-0-beta-52";
function SummaryCell({ column, colSpan, row: row$1, rowIdx, isCellSelected, selectCell }) {
	const { tabIndex, childTabIndex, onFocus } = useRovingTabIndex(isCellSelected);
	const { summaryCellClass } = column;
	const className = getCellClassname(column, summaryCellClassname, typeof summaryCellClass === "function" ? summaryCellClass(row$1) : summaryCellClass);
	function onMouseDown() {
		selectCell({
			rowIdx,
			idx: column.idx
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
		role: "gridcell",
		"aria-colindex": column.idx + 1,
		"aria-colspan": colSpan,
		"aria-selected": isCellSelected,
		tabIndex,
		className,
		style: getCellStyle(column, colSpan),
		onMouseDown,
		onFocus,
		children: column.renderSummaryCell?.({
			column,
			row: row$1,
			tabIndex: childTabIndex
		})
	});
}
var SummaryCell_default = (0, import_react$5.memo)(SummaryCell);

//#endregion
//#region src/SummaryRow.tsx
var import_react$4 = __toESM(require_react(), 1);
var import_jsx_runtime$5 = __toESM(require_jsx_runtime(), 1);
const summaryRow = "skuhp557-0-0-beta-52";
const topSummaryRow = "tf8l5ub7-0-0-beta-52";
const summaryRowClassname = `rdg-summary-row ${summaryRow}`;
function SummaryRow({ rowIdx, gridRowStart, row: row$1, viewportColumns, top, bottom, lastFrozenColumnIndex, selectedCellIdx, isTop, selectCell, "aria-rowindex": ariaRowIndex }) {
	const cells = [];
	for (let index = 0; index < viewportColumns.length; index++) {
		const column = viewportColumns[index];
		const colSpan = getColSpan(column, lastFrozenColumnIndex, {
			type: "SUMMARY",
			row: row$1
		});
		if (colSpan !== void 0) index += colSpan - 1;
		const isCellSelected = selectedCellIdx === column.idx;
		cells.push(/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(SummaryCell_default, {
			column,
			colSpan,
			row: row$1,
			rowIdx,
			isCellSelected,
			selectCell
		}, column.key));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
		role: "row",
		"aria-rowindex": ariaRowIndex,
		className: clsx_default(rowClassname, `rdg-row-${rowIdx % 2 === 0 ? "even" : "odd"}`, summaryRowClassname, {
			[rowSelectedClassname]: selectedCellIdx === -1,
			[`${topSummaryRowClassname} ${topSummaryRow}`]: isTop,
			[bottomSummaryRowClassname]: !isTop
		}),
		style: {
			...getRowStyle(gridRowStart),
			"--rdg-summary-row-top": top !== void 0 ? `${top}px` : void 0,
			"--rdg-summary-row-bottom": bottom !== void 0 ? `${bottom}px` : void 0
		},
		children: cells
	});
}
var SummaryRow_default = (0, import_react$4.memo)(SummaryRow);

//#endregion
//#region src/DataGrid.tsx
var import_react$3 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());
var import_jsx_runtime$4 = __toESM(require_jsx_runtime());
/**
* Main API Component to render a data grid of rows and columns
*
* @example
*
* <DataGrid columns={columns} rows={rows} />
*/
function DataGrid(props) {
	const { ref, columns: rawColumns, rows, topSummaryRows, bottomSummaryRows, rowKeyGetter, onRowsChange, rowHeight: rawRowHeight, headerRowHeight: rawHeaderRowHeight, summaryRowHeight: rawSummaryRowHeight, columnWidths: columnWidthsRaw, onColumnWidthsChange: onColumnWidthsChangeRaw, selectedRows, isRowSelectionDisabled, onSelectedRowsChange, sortColumns, onSortColumnsChange, defaultColumnOptions, onCellMouseDown, onCellClick, onCellDoubleClick, onCellContextMenu, onCellKeyDown, onSelectedCellChange, onScroll, onColumnResize, onColumnsReorder, onFill, onCellCopy, onCellPaste, enableVirtualization: rawEnableVirtualization, renderers, className, style, rowClass, headerRowClass, direction: rawDirection, role: rawRole, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, "aria-description": ariaDescription, "aria-describedby": ariaDescribedBy, "aria-rowcount": rawAriaRowCount, "data-testid": testId, "data-cy": dataCy } = props;
	/**
	* defaults
	*/
	const defaultRenderers = useDefaultRenderers();
	const role = rawRole ?? "grid";
	const rowHeight = rawRowHeight ?? 35;
	const headerRowHeight = rawHeaderRowHeight ?? (typeof rowHeight === "number" ? rowHeight : 35);
	const summaryRowHeight = rawSummaryRowHeight ?? (typeof rowHeight === "number" ? rowHeight : 35);
	const renderRow = renderers?.renderRow ?? defaultRenderers?.renderRow ?? defaultRenderRow;
	const renderCell = renderers?.renderCell ?? defaultRenderers?.renderCell ?? defaultRenderCell;
	const renderSortStatus$1 = renderers?.renderSortStatus ?? defaultRenderers?.renderSortStatus ?? renderSortStatus;
	const renderCheckbox$1 = renderers?.renderCheckbox ?? defaultRenderers?.renderCheckbox ?? renderCheckbox;
	const noRowsFallback = renderers?.noRowsFallback ?? defaultRenderers?.noRowsFallback;
	const enableVirtualization = rawEnableVirtualization ?? true;
	const direction = rawDirection ?? "ltr";
	/**
	* states
	*/
	const [scrollTop, setScrollTop] = (0, import_react$3.useState)(0);
	const [scrollLeft, setScrollLeft] = (0, import_react$3.useState)(0);
	const [columnWidthsInternal, setColumnWidthsInternal] = (0, import_react$3.useState)(() => columnWidthsRaw ?? new Map());
	const [isColumnResizing, setColumnResizing] = (0, import_react$3.useState)(false);
	const [isDragging, setDragging] = (0, import_react$3.useState)(false);
	const [draggedOverRowIdx, setDraggedOverRowIdx] = (0, import_react$3.useState)(void 0);
	const [scrollToPosition, setScrollToPosition] = (0, import_react$3.useState)(null);
	const [shouldFocusCell, setShouldFocusCell] = (0, import_react$3.useState)(false);
	const [previousRowIdx, setPreviousRowIdx] = (0, import_react$3.useState)(-1);
	const isColumnWidthsControlled = columnWidthsRaw != null && onColumnWidthsChangeRaw != null && !isColumnResizing;
	const columnWidths = isColumnWidthsControlled ? columnWidthsRaw : columnWidthsInternal;
	const onColumnWidthsChange = isColumnWidthsControlled ? (columnWidths$1) => {
		setColumnWidthsInternal(columnWidths$1);
		onColumnWidthsChangeRaw(columnWidths$1);
	} : setColumnWidthsInternal;
	const getColumnWidth = (0, import_react$3.useCallback)((column) => {
		return columnWidths.get(column.key)?.width ?? column.width;
	}, [columnWidths]);
	const [gridRef, gridWidth, gridHeight, horizontalScrollbarHeight] = useGridDimensions();
	const { columns, colSpanColumns, lastFrozenColumnIndex, headerRowsCount, colOverscanStartIdx, colOverscanEndIdx, templateColumns, layoutCssVars, totalFrozenColumnWidth } = useCalculatedColumns({
		rawColumns,
		defaultColumnOptions,
		getColumnWidth,
		scrollLeft,
		viewportWidth: gridWidth,
		enableVirtualization
	});
	const topSummaryRowsCount = topSummaryRows?.length ?? 0;
	const bottomSummaryRowsCount = bottomSummaryRows?.length ?? 0;
	const summaryRowsCount = topSummaryRowsCount + bottomSummaryRowsCount;
	const headerAndTopSummaryRowsCount = headerRowsCount + topSummaryRowsCount;
	const groupedColumnHeaderRowsCount = headerRowsCount - 1;
	const minRowIdx = -headerAndTopSummaryRowsCount;
	const mainHeaderRowIdx = minRowIdx + groupedColumnHeaderRowsCount;
	const maxRowIdx = rows.length + bottomSummaryRowsCount - 1;
	const [selectedPosition, setSelectedPosition] = (0, import_react$3.useState)(() => ({
		idx: -1,
		rowIdx: minRowIdx - 1,
		mode: "SELECT"
	}));
	/**
	* refs
	*/
	const focusSinkRef = (0, import_react$3.useRef)(null);
	/**
	* computed values
	*/
	const isTreeGrid = role === "treegrid";
	const headerRowsHeight = headerRowsCount * headerRowHeight;
	const summaryRowsHeight = summaryRowsCount * summaryRowHeight;
	const clientHeight = gridHeight - headerRowsHeight - summaryRowsHeight;
	const isSelectable = selectedRows != null && onSelectedRowsChange != null;
	const { leftKey, rightKey } = getLeftRightKey(direction);
	const ariaRowCount = rawAriaRowCount ?? headerRowsCount + rows.length + summaryRowsCount;
	const defaultGridComponents = (0, import_react$3.useMemo)(() => ({
		renderCheckbox: renderCheckbox$1,
		renderSortStatus: renderSortStatus$1,
		renderCell
	}), [
		renderCheckbox$1,
		renderSortStatus$1,
		renderCell
	]);
	const headerSelectionValue = (0, import_react$3.useMemo)(() => {
		let hasSelectedRow = false;
		let hasUnselectedRow = false;
		if (rowKeyGetter != null && selectedRows != null && selectedRows.size > 0) for (const row$1 of rows) {
			if (selectedRows.has(rowKeyGetter(row$1))) hasSelectedRow = true;
			else hasUnselectedRow = true;
			if (hasSelectedRow && hasUnselectedRow) break;
		}
		return {
			isRowSelected: hasSelectedRow && !hasUnselectedRow,
			isIndeterminate: hasSelectedRow && hasUnselectedRow
		};
	}, [
		rows,
		selectedRows,
		rowKeyGetter
	]);
	const { rowOverscanStartIdx, rowOverscanEndIdx, totalRowHeight, gridTemplateRows, getRowTop, getRowHeight, findRowIdx } = useViewportRows({
		rows,
		rowHeight,
		clientHeight,
		scrollTop,
		enableVirtualization
	});
	const viewportColumns = useViewportColumns({
		columns,
		colSpanColumns,
		colOverscanStartIdx,
		colOverscanEndIdx,
		lastFrozenColumnIndex,
		rowOverscanStartIdx,
		rowOverscanEndIdx,
		rows,
		topSummaryRows,
		bottomSummaryRows
	});
	const { gridTemplateColumns, handleColumnResize } = useColumnWidths(columns, viewportColumns, templateColumns, gridRef, gridWidth, columnWidths, onColumnWidthsChange, onColumnResize, setColumnResizing);
	const minColIdx = isTreeGrid ? -1 : 0;
	const maxColIdx = columns.length - 1;
	const selectedCellIsWithinSelectionBounds = isCellWithinSelectionBounds(selectedPosition);
	const selectedCellIsWithinViewportBounds = isCellWithinViewportBounds(selectedPosition);
	const scrollHeight = headerRowHeight + totalRowHeight + summaryRowsHeight + horizontalScrollbarHeight;
	const shouldFocusGrid = !selectedCellIsWithinSelectionBounds;
	/**
	* The identity of the wrapper function is stable so it won't break memoization
	*/
	const handleColumnResizeLatest = useLatestFunc(handleColumnResize);
	const handleColumnResizeEndLatest = useLatestFunc(handleColumnResizeEnd);
	const onColumnsReorderLastest = useLatestFunc(onColumnsReorder);
	const onSortColumnsChangeLatest = useLatestFunc(onSortColumnsChange);
	const onCellMouseDownLatest = useLatestFunc(onCellMouseDown);
	const onCellClickLatest = useLatestFunc(onCellClick);
	const onCellDoubleClickLatest = useLatestFunc(onCellDoubleClick);
	const onCellContextMenuLatest = useLatestFunc(onCellContextMenu);
	const selectHeaderRowLatest = useLatestFunc(selectHeaderRow);
	const selectRowLatest = useLatestFunc(selectRow);
	const handleFormatterRowChangeLatest = useLatestFunc(updateRow);
	const selectCellLatest = useLatestFunc(selectCell);
	const selectHeaderCellLatest = useLatestFunc(selectHeaderCell);
	/**
	* callbacks
	*/
	const focusCellOrCellContent = (0, import_react$3.useCallback)((shouldScroll = true) => {
		const cell$1 = getCellToScroll(gridRef.current);
		if (cell$1 === null) return;
		if (shouldScroll) scrollIntoView(cell$1);
		const elementToFocus = cell$1.querySelector("[tabindex=\"0\"]") ?? cell$1;
		elementToFocus.focus({ preventScroll: true });
	}, [gridRef]);
	/**
	* effects
	*/
	(0, import_react$3.useLayoutEffect)(() => {
		if (shouldFocusCell) {
			if (focusSinkRef.current !== null && selectedPosition.idx === -1) {
				focusSinkRef.current.focus({ preventScroll: true });
				scrollIntoView(focusSinkRef.current);
			} else focusCellOrCellContent();
			setShouldFocusCell(false);
		}
	}, [
		shouldFocusCell,
		focusCellOrCellContent,
		selectedPosition.idx
	]);
	(0, import_react$3.useImperativeHandle)(ref, () => ({
		element: gridRef.current,
		scrollToCell({ idx, rowIdx }) {
			const scrollToIdx = idx !== void 0 && idx > lastFrozenColumnIndex && idx < columns.length ? idx : void 0;
			const scrollToRowIdx = rowIdx !== void 0 && isRowIdxWithinViewportBounds(rowIdx) ? rowIdx : void 0;
			if (scrollToIdx !== void 0 || scrollToRowIdx !== void 0) setScrollToPosition({
				idx: scrollToIdx,
				rowIdx: scrollToRowIdx
			});
		},
		selectCell
	}));
	/**
	* event handlers
	*/
	function selectHeaderRow(args) {
		if (!onSelectedRowsChange) return;
		assertIsValidKeyGetter(rowKeyGetter);
		const newSelectedRows = new Set(selectedRows);
		for (const row$1 of rows) {
			if (isRowSelectionDisabled?.(row$1) === true) continue;
			const rowKey = rowKeyGetter(row$1);
			if (args.checked) newSelectedRows.add(rowKey);
			else newSelectedRows.delete(rowKey);
		}
		onSelectedRowsChange(newSelectedRows);
	}
	function selectRow(args) {
		if (!onSelectedRowsChange) return;
		assertIsValidKeyGetter(rowKeyGetter);
		const { row: row$1, checked, isShiftClick } = args;
		if (isRowSelectionDisabled?.(row$1) === true) return;
		const newSelectedRows = new Set(selectedRows);
		const rowKey = rowKeyGetter(row$1);
		const rowIdx = rows.indexOf(row$1);
		setPreviousRowIdx(rowIdx);
		if (checked) newSelectedRows.add(rowKey);
		else newSelectedRows.delete(rowKey);
		if (isShiftClick && previousRowIdx !== -1 && previousRowIdx !== rowIdx && previousRowIdx < rows.length) {
			const step = sign(rowIdx - previousRowIdx);
			for (let i = previousRowIdx + step; i !== rowIdx; i += step) {
				const row$2 = rows[i];
				if (isRowSelectionDisabled?.(row$2) === true) continue;
				if (checked) newSelectedRows.add(rowKeyGetter(row$2));
				else newSelectedRows.delete(rowKeyGetter(row$2));
			}
		}
		onSelectedRowsChange(newSelectedRows);
	}
	function handleKeyDown(event) {
		const { idx, rowIdx, mode } = selectedPosition;
		if (mode === "EDIT") return;
		if (onCellKeyDown && isRowIdxWithinViewportBounds(rowIdx)) {
			const row$1 = rows[rowIdx];
			const cellEvent = createCellEvent(event);
			onCellKeyDown({
				mode: "SELECT",
				row: row$1,
				column: columns[idx],
				rowIdx,
				selectCell
			}, cellEvent);
			if (cellEvent.isGridDefaultPrevented()) return;
		}
		if (!(event.target instanceof Element)) return;
		const isCellEvent = event.target.closest(".rdg-cell") !== null;
		const isRowEvent = isTreeGrid && event.target === focusSinkRef.current;
		if (!isCellEvent && !isRowEvent) return;
		switch (event.key) {
			case "ArrowUp":
			case "ArrowDown":
			case "ArrowLeft":
			case "ArrowRight":
			case "Tab":
			case "Home":
			case "End":
			case "PageUp":
			case "PageDown":
				navigate(event);
				break;
			default:
				handleCellInput(event);
				break;
		}
	}
	function handleFocus(event) {
		if (event.target === event.currentTarget) selectHeaderCell({
			idx: minColIdx,
			rowIdx: headerRowsCount
		});
	}
	function handleScroll(event) {
		const { scrollTop: scrollTop$1, scrollLeft: scrollLeft$1 } = event.currentTarget;
		(0, import_react_dom.flushSync)(() => {
			setScrollTop(scrollTop$1);
			setScrollLeft(abs(scrollLeft$1));
		});
		onScroll?.(event);
	}
	function updateRow(column, rowIdx, row$1) {
		if (typeof onRowsChange !== "function") return;
		if (row$1 === rows[rowIdx]) return;
		const updatedRows = rows.with(rowIdx, row$1);
		onRowsChange(updatedRows, {
			indexes: [rowIdx],
			column
		});
	}
	function commitEditorChanges() {
		if (selectedPosition.mode !== "EDIT") return;
		updateRow(columns[selectedPosition.idx], selectedPosition.rowIdx, selectedPosition.row);
	}
	function handleCellCopy(event) {
		if (!selectedCellIsWithinViewportBounds) return;
		const { idx, rowIdx } = selectedPosition;
		onCellCopy?.({
			row: rows[rowIdx],
			column: columns[idx]
		}, event);
	}
	function handleCellPaste(event) {
		if (!onCellPaste || !onRowsChange || !isCellEditable(selectedPosition)) return;
		const { idx, rowIdx } = selectedPosition;
		const column = columns[idx];
		const updatedRow = onCellPaste({
			row: rows[rowIdx],
			column
		}, event);
		updateRow(column, rowIdx, updatedRow);
	}
	function handleCellInput(event) {
		if (!selectedCellIsWithinViewportBounds) return;
		const row$1 = rows[selectedPosition.rowIdx];
		const { key, shiftKey } = event;
		if (isSelectable && shiftKey && key === " ") {
			assertIsValidKeyGetter(rowKeyGetter);
			const rowKey = rowKeyGetter(row$1);
			selectRow({
				row: row$1,
				checked: !selectedRows.has(rowKey),
				isShiftClick: false
			});
			event.preventDefault();
			return;
		}
		if (isCellEditable(selectedPosition) && isDefaultCellInput(event, onCellPaste != null)) setSelectedPosition(({ idx, rowIdx }) => ({
			idx,
			rowIdx,
			mode: "EDIT",
			row: row$1,
			originalRow: row$1
		}));
	}
	function handleColumnResizeEnd() {
		if (isColumnResizing) {
			onColumnWidthsChangeRaw?.(columnWidths);
			setColumnResizing(false);
		}
	}
	function handleDragHandlePointerDown(event) {
		event.preventDefault();
		if (event.pointerType === "mouse" && event.buttons !== 1) return;
		setDragging(true);
		event.currentTarget.setPointerCapture(event.pointerId);
	}
	function handleDragHandlePointerMove(event) {
		const gridEl = gridRef.current;
		const headerAndTopSummaryRowsHeight = headerRowsHeight + topSummaryRowsCount * summaryRowHeight;
		const offset = scrollTop - headerAndTopSummaryRowsHeight + event.clientY - gridEl.getBoundingClientRect().top;
		const overRowIdx = findRowIdx(offset);
		setDraggedOverRowIdx(overRowIdx);
		const ariaRowIndex = headerAndTopSummaryRowsCount + overRowIdx + 1;
		const el = gridEl.querySelector(`:scope > [aria-rowindex="${ariaRowIndex}"] > [aria-colindex="${selectedPosition.idx + 1}"]`);
		scrollIntoView(el);
	}
	function handleDragHandleLostPointerCapture() {
		setDragging(false);
		if (draggedOverRowIdx === void 0) return;
		const { rowIdx } = selectedPosition;
		const [startRowIndex, endRowIndex] = rowIdx < draggedOverRowIdx ? [rowIdx + 1, draggedOverRowIdx + 1] : [draggedOverRowIdx, rowIdx];
		updateRows(startRowIndex, endRowIndex);
		setDraggedOverRowIdx(void 0);
	}
	function handleDragHandleClick() {
		focusCellOrCellContent(false);
	}
	function handleDragHandleDoubleClick(event) {
		event.stopPropagation();
		updateRows(selectedPosition.rowIdx + 1, rows.length);
	}
	function updateRows(startRowIdx, endRowIdx) {
		if (onRowsChange == null) return;
		const { rowIdx, idx } = selectedPosition;
		const column = columns[idx];
		const sourceRow = rows[rowIdx];
		const updatedRows = [...rows];
		const indexes = [];
		for (let i = startRowIdx; i < endRowIdx; i++) if (isCellEditable({
			rowIdx: i,
			idx
		})) {
			const updatedRow = onFill({
				columnKey: column.key,
				sourceRow,
				targetRow: rows[i]
			});
			if (updatedRow !== rows[i]) {
				updatedRows[i] = updatedRow;
				indexes.push(i);
			}
		}
		if (indexes.length > 0) onRowsChange(updatedRows, {
			indexes,
			column
		});
	}
	/**
	* utils
	*/
	function isColIdxWithinSelectionBounds(idx) {
		return idx >= minColIdx && idx <= maxColIdx;
	}
	function isRowIdxWithinViewportBounds(rowIdx) {
		return rowIdx >= 0 && rowIdx < rows.length;
	}
	function isCellWithinSelectionBounds({ idx, rowIdx }) {
		return rowIdx >= minRowIdx && rowIdx <= maxRowIdx && isColIdxWithinSelectionBounds(idx);
	}
	function isCellWithinEditBounds({ idx, rowIdx }) {
		return isRowIdxWithinViewportBounds(rowIdx) && idx >= 0 && idx <= maxColIdx;
	}
	function isCellWithinViewportBounds({ idx, rowIdx }) {
		return isRowIdxWithinViewportBounds(rowIdx) && isColIdxWithinSelectionBounds(idx);
	}
	function isCellEditable(position) {
		return isCellWithinEditBounds(position) && isSelectedCellEditable({
			columns,
			rows,
			selectedPosition: position
		});
	}
	function selectCell(position, enableEditor) {
		if (!isCellWithinSelectionBounds(position)) return;
		commitEditorChanges();
		const samePosition = isSamePosition(selectedPosition, position);
		if (enableEditor && isCellEditable(position)) {
			const row$1 = rows[position.rowIdx];
			setSelectedPosition({
				...position,
				mode: "EDIT",
				row: row$1,
				originalRow: row$1
			});
		} else if (samePosition) scrollIntoView(getCellToScroll(gridRef.current));
		else {
			setShouldFocusCell(true);
			setSelectedPosition({
				...position,
				mode: "SELECT"
			});
		}
		if (onSelectedCellChange && !samePosition) onSelectedCellChange({
			rowIdx: position.rowIdx,
			row: isRowIdxWithinViewportBounds(position.rowIdx) ? rows[position.rowIdx] : void 0,
			column: columns[position.idx]
		});
	}
	function selectHeaderCell({ idx, rowIdx }) {
		selectCell({
			rowIdx: minRowIdx + rowIdx - 1,
			idx
		});
	}
	function getNextPosition(key, ctrlKey, shiftKey) {
		const { idx, rowIdx } = selectedPosition;
		const isRowSelected = selectedCellIsWithinSelectionBounds && idx === -1;
		switch (key) {
			case "ArrowUp": return {
				idx,
				rowIdx: rowIdx - 1
			};
			case "ArrowDown": return {
				idx,
				rowIdx: rowIdx + 1
			};
			case leftKey: return {
				idx: idx - 1,
				rowIdx
			};
			case rightKey: return {
				idx: idx + 1,
				rowIdx
			};
			case "Tab": return {
				idx: idx + (shiftKey ? -1 : 1),
				rowIdx
			};
			case "Home":
				if (isRowSelected) return {
					idx,
					rowIdx: minRowIdx
				};
				return {
					idx: 0,
					rowIdx: ctrlKey ? minRowIdx : rowIdx
				};
			case "End":
				if (isRowSelected) return {
					idx,
					rowIdx: maxRowIdx
				};
				return {
					idx: maxColIdx,
					rowIdx: ctrlKey ? maxRowIdx : rowIdx
				};
			case "PageUp": {
				if (selectedPosition.rowIdx === minRowIdx) return selectedPosition;
				const nextRowY = getRowTop(rowIdx) + getRowHeight(rowIdx) - clientHeight;
				return {
					idx,
					rowIdx: nextRowY > 0 ? findRowIdx(nextRowY) : 0
				};
			}
			case "PageDown": {
				if (selectedPosition.rowIdx >= rows.length) return selectedPosition;
				const nextRowY = getRowTop(rowIdx) + clientHeight;
				return {
					idx,
					rowIdx: nextRowY < totalRowHeight ? findRowIdx(nextRowY) : rows.length - 1
				};
			}
			default: return selectedPosition;
		}
	}
	function navigate(event) {
		const { key, shiftKey } = event;
		let cellNavigationMode = "NONE";
		if (key === "Tab") {
			if (canExitGrid({
				shiftKey,
				maxColIdx,
				minRowIdx,
				maxRowIdx,
				selectedPosition
			})) {
				commitEditorChanges();
				return;
			}
			cellNavigationMode = "CHANGE_ROW";
		}
		event.preventDefault();
		const ctrlKey = isCtrlKeyHeldDown(event);
		const nextPosition = getNextPosition(key, ctrlKey, shiftKey);
		if (isSamePosition(selectedPosition, nextPosition)) return;
		const nextSelectedCellPosition = getNextSelectedCellPosition({
			moveUp: key === "ArrowUp",
			moveNext: key === rightKey || key === "Tab" && !shiftKey,
			columns,
			colSpanColumns,
			rows,
			topSummaryRows,
			bottomSummaryRows,
			minRowIdx,
			mainHeaderRowIdx,
			maxRowIdx,
			lastFrozenColumnIndex,
			cellNavigationMode,
			currentPosition: selectedPosition,
			nextPosition,
			isCellWithinBounds: isCellWithinSelectionBounds
		});
		selectCell(nextSelectedCellPosition);
	}
	function getDraggedOverCellIdx(currentRowIdx) {
		if (draggedOverRowIdx === void 0) return;
		const { rowIdx } = selectedPosition;
		const isDraggedOver = rowIdx < draggedOverRowIdx ? rowIdx < currentRowIdx && currentRowIdx <= draggedOverRowIdx : rowIdx > currentRowIdx && currentRowIdx >= draggedOverRowIdx;
		return isDraggedOver ? selectedPosition.idx : void 0;
	}
	function getDragHandle() {
		if (onFill == null || selectedPosition.mode === "EDIT" || !isCellWithinViewportBounds(selectedPosition)) return;
		const { idx, rowIdx } = selectedPosition;
		const column = columns[idx];
		if (column.renderEditCell == null || column.editable === false) return;
		const isLastRow = rowIdx === maxRowIdx;
		const columnWidth = getColumnWidth(column);
		const colSpan = column.colSpan?.({
			type: "ROW",
			row: rows[rowIdx]
		}) ?? 1;
		const { insetInlineStart,...style$1 } = getCellStyle(column, colSpan);
		const marginEnd = "calc(var(--rdg-drag-handle-size) * -0.5 + 1px)";
		const isLastColumn = column.idx + colSpan - 1 === maxColIdx;
		const dragHandleStyle = {
			...style$1,
			gridRowStart: headerAndTopSummaryRowsCount + rowIdx + 1,
			marginInlineEnd: isLastColumn ? void 0 : marginEnd,
			marginBlockEnd: isLastRow ? void 0 : marginEnd,
			insetInlineStart: insetInlineStart ? `calc(${insetInlineStart} + ${columnWidth}px + var(--rdg-drag-handle-size) * -0.5 - 1px)` : void 0
		};
		return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("div", {
			style: dragHandleStyle,
			className: clsx_default(cellDragHandleClassname, column.frozen && cellDragHandleFrozenClassname),
			onPointerDown: handleDragHandlePointerDown,
			onPointerMove: isDragging ? handleDragHandlePointerMove : void 0,
			onLostPointerCapture: isDragging ? handleDragHandleLostPointerCapture : void 0,
			onClick: handleDragHandleClick,
			onDoubleClick: handleDragHandleDoubleClick
		});
	}
	function getCellEditor(rowIdx) {
		if (selectedPosition.rowIdx !== rowIdx || selectedPosition.mode === "SELECT") return;
		const { idx, row: row$1 } = selectedPosition;
		const column = columns[idx];
		const colSpan = getColSpan(column, lastFrozenColumnIndex, {
			type: "ROW",
			row: row$1
		});
		const closeOnExternalRowChange = column.editorOptions?.closeOnExternalRowChange ?? true;
		const closeEditor = (shouldFocusCell$1) => {
			setShouldFocusCell(shouldFocusCell$1);
			setSelectedPosition(({ idx: idx$1, rowIdx: rowIdx$1 }) => ({
				idx: idx$1,
				rowIdx: rowIdx$1,
				mode: "SELECT"
			}));
		};
		const onRowChange = (row$2, commitChanges, shouldFocusCell$1) => {
			if (commitChanges) (0, import_react_dom.flushSync)(() => {
				updateRow(column, selectedPosition.rowIdx, row$2);
				closeEditor(shouldFocusCell$1);
			});
			else setSelectedPosition((position) => ({
				...position,
				row: row$2
			}));
		};
		if (closeOnExternalRowChange && rows[selectedPosition.rowIdx] !== selectedPosition.originalRow) closeEditor(false);
		return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(EditCell, {
			column,
			colSpan,
			row: row$1,
			rowIdx,
			onRowChange,
			closeEditor,
			onKeyDown: onCellKeyDown,
			navigate
		}, column.key);
	}
	function getRowViewportColumns(rowIdx) {
		const selectedColumn = selectedPosition.idx === -1 ? void 0 : columns[selectedPosition.idx];
		if (selectedColumn !== void 0 && selectedPosition.rowIdx === rowIdx && !viewportColumns.includes(selectedColumn)) return selectedPosition.idx > colOverscanEndIdx ? [...viewportColumns, selectedColumn] : [
			...viewportColumns.slice(0, lastFrozenColumnIndex + 1),
			selectedColumn,
			...viewportColumns.slice(lastFrozenColumnIndex + 1)
		];
		return viewportColumns;
	}
	function getViewportRows() {
		const rowElements = [];
		const { idx: selectedIdx, rowIdx: selectedRowIdx } = selectedPosition;
		const startRowIdx = selectedCellIsWithinViewportBounds && selectedRowIdx < rowOverscanStartIdx ? rowOverscanStartIdx - 1 : rowOverscanStartIdx;
		const endRowIdx = selectedCellIsWithinViewportBounds && selectedRowIdx > rowOverscanEndIdx ? rowOverscanEndIdx + 1 : rowOverscanEndIdx;
		for (let viewportRowIdx = startRowIdx; viewportRowIdx <= endRowIdx; viewportRowIdx++) {
			const isRowOutsideViewport = viewportRowIdx === rowOverscanStartIdx - 1 || viewportRowIdx === rowOverscanEndIdx + 1;
			const rowIdx = isRowOutsideViewport ? selectedRowIdx : viewportRowIdx;
			let rowColumns = viewportColumns;
			const selectedColumn = selectedIdx === -1 ? void 0 : columns[selectedIdx];
			if (selectedColumn !== void 0) if (isRowOutsideViewport) rowColumns = [selectedColumn];
			else rowColumns = getRowViewportColumns(rowIdx);
			const row$1 = rows[rowIdx];
			const gridRowStart = headerAndTopSummaryRowsCount + rowIdx + 1;
			let key = rowIdx;
			let isRowSelected = false;
			if (typeof rowKeyGetter === "function") {
				key = rowKeyGetter(row$1);
				isRowSelected = selectedRows?.has(key) ?? false;
			}
			rowElements.push(renderRow(key, {
				"aria-rowindex": headerAndTopSummaryRowsCount + rowIdx + 1,
				"aria-selected": isSelectable ? isRowSelected : void 0,
				rowIdx,
				row: row$1,
				viewportColumns: rowColumns,
				isRowSelectionDisabled: isRowSelectionDisabled?.(row$1) ?? false,
				isRowSelected,
				onCellMouseDown: onCellMouseDownLatest,
				onCellClick: onCellClickLatest,
				onCellDoubleClick: onCellDoubleClickLatest,
				onCellContextMenu: onCellContextMenuLatest,
				rowClass,
				gridRowStart,
				selectedCellIdx: selectedRowIdx === rowIdx ? selectedIdx : void 0,
				draggedOverCellIdx: getDraggedOverCellIdx(rowIdx),
				lastFrozenColumnIndex,
				onRowChange: handleFormatterRowChangeLatest,
				selectCell: selectCellLatest,
				selectedCellEditor: getCellEditor(rowIdx)
			}));
		}
		return rowElements;
	}
	if (selectedPosition.idx > maxColIdx || selectedPosition.rowIdx > maxRowIdx) {
		setSelectedPosition({
			idx: -1,
			rowIdx: minRowIdx - 1,
			mode: "SELECT"
		});
		setDraggedOverRowIdx(void 0);
	}
	if (isColumnWidthsControlled && columnWidthsInternal !== columnWidthsRaw) setColumnWidthsInternal(columnWidthsRaw);
	let templateRows = `repeat(${headerRowsCount}, ${headerRowHeight}px)`;
	if (topSummaryRowsCount > 0) templateRows += ` repeat(${topSummaryRowsCount}, ${summaryRowHeight}px)`;
	if (rows.length > 0) templateRows += gridTemplateRows;
	if (bottomSummaryRowsCount > 0) templateRows += ` repeat(${bottomSummaryRowsCount}, ${summaryRowHeight}px)`;
	const isGroupRowFocused = selectedPosition.idx === -1 && selectedPosition.rowIdx !== minRowIdx - 1;
	return /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
		role,
		"aria-label": ariaLabel,
		"aria-labelledby": ariaLabelledBy,
		"aria-description": ariaDescription,
		"aria-describedby": ariaDescribedBy,
		"aria-multiselectable": isSelectable ? true : void 0,
		"aria-colcount": columns.length,
		"aria-rowcount": ariaRowCount,
		tabIndex: shouldFocusGrid ? 0 : -1,
		className: clsx_default(rootClassname, { [viewportDraggingClassname]: isDragging }, className),
		style: {
			...style,
			scrollPaddingInlineStart: selectedPosition.idx > lastFrozenColumnIndex || scrollToPosition?.idx !== void 0 ? `${totalFrozenColumnWidth}px` : void 0,
			scrollPaddingBlock: isRowIdxWithinViewportBounds(selectedPosition.rowIdx) || scrollToPosition?.rowIdx !== void 0 ? `${headerRowsHeight + topSummaryRowsCount * summaryRowHeight}px ${bottomSummaryRowsCount * summaryRowHeight}px` : void 0,
			gridTemplateColumns,
			gridTemplateRows: templateRows,
			"--rdg-header-row-height": `${headerRowHeight}px`,
			"--rdg-scroll-height": `${scrollHeight}px`,
			...layoutCssVars
		},
		dir: direction,
		ref: gridRef,
		onFocus: shouldFocusGrid ? handleFocus : void 0,
		onScroll: handleScroll,
		onKeyDown: handleKeyDown,
		onCopy: handleCellCopy,
		onPaste: handleCellPaste,
		"data-testid": testId,
		"data-cy": dataCy,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)(DataGridDefaultRenderersContext, {
				value: defaultGridComponents,
				children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(HeaderRowSelectionChangeContext, {
					value: selectHeaderRowLatest,
					children: /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)(HeaderRowSelectionContext, {
						value: headerSelectionValue,
						children: [Array.from({ length: groupedColumnHeaderRowsCount }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(GroupedColumnHeaderRow_default, {
							rowIdx: index + 1,
							level: -groupedColumnHeaderRowsCount + index,
							columns: getRowViewportColumns(minRowIdx + index),
							selectedCellIdx: selectedPosition.rowIdx === minRowIdx + index ? selectedPosition.idx : void 0,
							selectCell: selectHeaderCellLatest
						}, index)), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(HeaderRow_default, {
							headerRowClass,
							rowIdx: headerRowsCount,
							columns: getRowViewportColumns(mainHeaderRowIdx),
							onColumnResize: handleColumnResizeLatest,
							onColumnResizeEnd: handleColumnResizeEndLatest,
							onColumnsReorder: onColumnsReorderLastest,
							sortColumns,
							onSortColumnsChange: onSortColumnsChangeLatest,
							lastFrozenColumnIndex,
							selectedCellIdx: selectedPosition.rowIdx === mainHeaderRowIdx ? selectedPosition.idx : void 0,
							selectCell: selectHeaderCellLatest,
							direction
						})]
					})
				}), rows.length === 0 && noRowsFallback ? noRowsFallback : /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)(import_jsx_runtime$4.Fragment, { children: [
					topSummaryRows?.map((row$1, rowIdx) => {
						const gridRowStart = headerRowsCount + 1 + rowIdx;
						const summaryRowIdx = mainHeaderRowIdx + 1 + rowIdx;
						const isSummaryRowSelected = selectedPosition.rowIdx === summaryRowIdx;
						const top = headerRowsHeight + summaryRowHeight * rowIdx;
						return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(SummaryRow_default, {
							"aria-rowindex": gridRowStart,
							rowIdx: summaryRowIdx,
							gridRowStart,
							row: row$1,
							top,
							bottom: void 0,
							viewportColumns: getRowViewportColumns(summaryRowIdx),
							lastFrozenColumnIndex,
							selectedCellIdx: isSummaryRowSelected ? selectedPosition.idx : void 0,
							isTop: true,
							selectCell: selectCellLatest
						}, rowIdx);
					}),
					/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(RowSelectionChangeContext, {
						value: selectRowLatest,
						children: getViewportRows()
					}),
					bottomSummaryRows?.map((row$1, rowIdx) => {
						const gridRowStart = headerAndTopSummaryRowsCount + rows.length + rowIdx + 1;
						const summaryRowIdx = rows.length + rowIdx;
						const isSummaryRowSelected = selectedPosition.rowIdx === summaryRowIdx;
						const top = clientHeight > totalRowHeight ? gridHeight - summaryRowHeight * (bottomSummaryRows.length - rowIdx) : void 0;
						const bottom = top === void 0 ? summaryRowHeight * (bottomSummaryRows.length - 1 - rowIdx) : void 0;
						return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(SummaryRow_default, {
							"aria-rowindex": ariaRowCount - bottomSummaryRowsCount + rowIdx + 1,
							rowIdx: summaryRowIdx,
							gridRowStart,
							row: row$1,
							top,
							bottom,
							viewportColumns: getRowViewportColumns(summaryRowIdx),
							lastFrozenColumnIndex,
							selectedCellIdx: isSummaryRowSelected ? selectedPosition.idx : void 0,
							isTop: false,
							selectCell: selectCellLatest
						}, rowIdx);
					})
				] })]
			}),
			getDragHandle(),
			renderMeasuringCells(viewportColumns),
			isTreeGrid && /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("div", {
				ref: focusSinkRef,
				tabIndex: isGroupRowFocused ? 0 : -1,
				className: clsx_default(focusSinkClassname, {
					[focusSinkHeaderAndSummaryClassname]: !isRowIdxWithinViewportBounds(selectedPosition.rowIdx),
					[rowSelected]: isGroupRowFocused,
					[rowSelectedWithFrozenCell]: isGroupRowFocused && lastFrozenColumnIndex !== -1
				}),
				style: { gridRowStart: selectedPosition.rowIdx + headerAndTopSummaryRowsCount + 1 }
			}),
			scrollToPosition !== null && /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(ScrollToCell, {
				scrollToPosition,
				setScrollToCellPosition: setScrollToPosition,
				gridRef
			})
		]
	});
}
function getCellToScroll(gridEl) {
	return gridEl.querySelector(":scope > [role=\"row\"] > [tabindex=\"0\"]");
}
function isSamePosition(p1, p2) {
	return p1.idx === p2.idx && p1.rowIdx === p2.rowIdx;
}

//#endregion
//#region src/GroupCell.tsx
var import_react$2 = __toESM(require_react(), 1);
var import_jsx_runtime$3 = __toESM(require_jsx_runtime(), 1);
function GroupCell({ id, groupKey, childRows, isExpanded, isCellSelected, column, row: row$1, groupColumnIndex, isGroupByColumn, toggleGroup: toggleGroupWrapper }) {
	const { tabIndex, childTabIndex, onFocus } = useRovingTabIndex(isCellSelected);
	function toggleGroup() {
		toggleGroupWrapper(id);
	}
	const isLevelMatching = isGroupByColumn && groupColumnIndex === column.idx;
	return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
		role: "gridcell",
		"aria-colindex": column.idx + 1,
		"aria-selected": isCellSelected,
		tabIndex,
		className: getCellClassname(column),
		style: {
			...getCellStyle(column),
			cursor: isLevelMatching ? "pointer" : "default"
		},
		onMouseDown: (event) => {
			event.preventDefault();
		},
		onClick: isLevelMatching ? toggleGroup : void 0,
		onFocus,
		children: (!isGroupByColumn || isLevelMatching) && column.renderGroupCell?.({
			groupKey,
			childRows,
			column,
			row: row$1,
			isExpanded,
			tabIndex: childTabIndex,
			toggleGroup
		})
	}, column.key);
}
var GroupCell_default = (0, import_react$2.memo)(GroupCell);

//#endregion
//#region src/GroupRow.tsx
var import_react$1 = __toESM(require_react(), 1);
var import_jsx_runtime$2 = __toESM(require_jsx_runtime(), 1);
const groupRow = "g1yxluv37-0-0-beta-52";
const groupRowClassname = `rdg-group-row ${groupRow}`;
function GroupedRow({ className, row: row$1, rowIdx, viewportColumns, selectedCellIdx, isRowSelected, selectCell, gridRowStart, groupBy, toggleGroup, isRowSelectionDisabled,...props }) {
	const idx = viewportColumns[0].key === SELECT_COLUMN_KEY ? row$1.level + 1 : row$1.level;
	function handleSelectGroup() {
		selectCell({
			rowIdx,
			idx: -1
		});
	}
	const selectionValue = (0, import_react$1.useMemo)(() => ({
		isRowSelectionDisabled: false,
		isRowSelected
	}), [isRowSelected]);
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(RowSelectionContext, {
		value: selectionValue,
		children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("div", {
			role: "row",
			"aria-level": row$1.level + 1,
			"aria-setsize": row$1.setSize,
			"aria-posinset": row$1.posInSet + 1,
			"aria-expanded": row$1.isExpanded,
			className: clsx_default(rowClassname, groupRowClassname, `rdg-row-${rowIdx % 2 === 0 ? "even" : "odd"}`, selectedCellIdx === -1 && rowSelectedClassname, className),
			onMouseDown: handleSelectGroup,
			style: getRowStyle(gridRowStart),
			...props,
			children: viewportColumns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(GroupCell_default, {
				id: row$1.id,
				groupKey: row$1.groupKey,
				childRows: row$1.childRows,
				isExpanded: row$1.isExpanded,
				isCellSelected: selectedCellIdx === column.idx,
				column,
				row: row$1,
				groupColumnIndex: idx,
				toggleGroup,
				isGroupByColumn: groupBy.includes(column.key)
			}, column.key))
		})
	});
}
var GroupRow_default = (0, import_react$1.memo)(GroupedRow);

//#endregion
//#region src/TreeDataGrid.tsx
var import_react = __toESM(require_react());
var import_jsx_runtime$1 = __toESM(require_jsx_runtime());
function TreeDataGrid({ columns: rawColumns, rows: rawRows, rowHeight: rawRowHeight, rowKeyGetter: rawRowKeyGetter, onCellKeyDown: rawOnCellKeyDown, onCellCopy: rawOnCellCopy, onCellPaste: rawOnCellPaste, onRowsChange, selectedRows: rawSelectedRows, onSelectedRowsChange: rawOnSelectedRowsChange, renderers, groupBy: rawGroupBy, rowGrouper, expandedGroupIds, onExpandedGroupIdsChange, groupIdGetter: rawGroupIdGetter,...props }) {
	const defaultRenderers = useDefaultRenderers();
	const rawRenderRow = renderers?.renderRow ?? defaultRenderers?.renderRow ?? defaultRenderRow;
	const headerAndTopSummaryRowsCount = 1 + (props.topSummaryRows?.length ?? 0);
	const { leftKey, rightKey } = getLeftRightKey(props.direction);
	const toggleGroupLatest = useLatestFunc(toggleGroup);
	const groupIdGetter = rawGroupIdGetter ?? defaultGroupIdGetter;
	const { columns, groupBy } = (0, import_react.useMemo)(() => {
		const columns$1 = rawColumns.toSorted(({ key: aKey }, { key: bKey }) => {
			if (aKey === SELECT_COLUMN_KEY) return -1;
			if (bKey === SELECT_COLUMN_KEY) return 1;
			if (rawGroupBy.includes(aKey)) {
				if (rawGroupBy.includes(bKey)) return rawGroupBy.indexOf(aKey) - rawGroupBy.indexOf(bKey);
				return -1;
			}
			if (rawGroupBy.includes(bKey)) return 1;
			return 0;
		});
		const groupBy$1 = [];
		for (const [index, column] of columns$1.entries()) if (rawGroupBy.includes(column.key)) {
			groupBy$1.push(column.key);
			columns$1[index] = {
				...column,
				frozen: true,
				renderCell: () => null,
				renderGroupCell: column.renderGroupCell ?? renderToggleGroup,
				editable: false
			};
		}
		return {
			columns: columns$1,
			groupBy: groupBy$1
		};
	}, [rawColumns, rawGroupBy]);
	const [groupedRows, rowsCount] = (0, import_react.useMemo)(() => {
		if (groupBy.length === 0) return [void 0, rawRows.length];
		const groupRows = (rows$1, [groupByKey, ...remainingGroupByKeys], startRowIndex) => {
			let groupRowsCount = 0;
			const groups = {};
			for (const [key, childRows] of Object.entries(rowGrouper(rows$1, groupByKey))) {
				const [childGroups, childRowsCount] = remainingGroupByKeys.length === 0 ? [childRows, childRows.length] : groupRows(childRows, remainingGroupByKeys, startRowIndex + groupRowsCount + 1);
				groups[key] = {
					childRows,
					childGroups,
					startRowIndex: startRowIndex + groupRowsCount
				};
				groupRowsCount += childRowsCount + 1;
			}
			return [groups, groupRowsCount];
		};
		return groupRows(rawRows, groupBy, 0);
	}, [
		groupBy,
		rowGrouper,
		rawRows
	]);
	const [rows, isGroupRow] = (0, import_react.useMemo)(() => {
		const allGroupRows = new Set();
		if (!groupedRows) return [rawRows, isGroupRow$1];
		const flattenedRows = [];
		const expandGroup = (rows$1, parentId, level) => {
			if (isReadonlyArray(rows$1)) {
				flattenedRows.push(...rows$1);
				return;
			}
			Object.keys(rows$1).forEach((groupKey, posInSet, keys) => {
				const id = groupIdGetter(groupKey, parentId);
				const isExpanded = expandedGroupIds.has(id);
				const { childRows, childGroups, startRowIndex } = rows$1[groupKey];
				const groupRow$1 = {
					id,
					parentId,
					groupKey,
					isExpanded,
					childRows,
					level,
					posInSet,
					startRowIndex,
					setSize: keys.length
				};
				flattenedRows.push(groupRow$1);
				allGroupRows.add(groupRow$1);
				if (isExpanded) expandGroup(childGroups, id, level + 1);
			});
		};
		expandGroup(groupedRows, void 0, 0);
		return [flattenedRows, isGroupRow$1];
		function isGroupRow$1(row$1) {
			return allGroupRows.has(row$1);
		}
	}, [
		expandedGroupIds,
		groupedRows,
		rawRows,
		groupIdGetter
	]);
	const rowHeight = (0, import_react.useMemo)(() => {
		if (typeof rawRowHeight === "function") return (row$1) => {
			if (isGroupRow(row$1)) return rawRowHeight({
				type: "GROUP",
				row: row$1
			});
			return rawRowHeight({
				type: "ROW",
				row: row$1
			});
		};
		return rawRowHeight;
	}, [isGroupRow, rawRowHeight]);
	const getParentRowAndIndex = (0, import_react.useCallback)((row$1) => {
		const rowIdx = rows.indexOf(row$1);
		for (let i = rowIdx - 1; i >= 0; i--) {
			const parentRow = rows[i];
			if (isGroupRow(parentRow) && (!isGroupRow(row$1) || row$1.parentId === parentRow.id)) return [parentRow, i];
		}
		return void 0;
	}, [isGroupRow, rows]);
	const rowKeyGetter = (0, import_react.useCallback)((row$1) => {
		if (isGroupRow(row$1)) return row$1.id;
		if (typeof rawRowKeyGetter === "function") return rawRowKeyGetter(row$1);
		const parentRowAndIndex = getParentRowAndIndex(row$1);
		if (parentRowAndIndex !== void 0) {
			const { startRowIndex, childRows } = parentRowAndIndex[0];
			const groupIndex = childRows.indexOf(row$1);
			return startRowIndex + groupIndex + 1;
		}
		return rows.indexOf(row$1);
	}, [
		getParentRowAndIndex,
		isGroupRow,
		rawRowKeyGetter,
		rows
	]);
	const selectedRows = (0, import_react.useMemo)(() => {
		if (rawSelectedRows == null) return null;
		assertIsValidKeyGetter(rawRowKeyGetter);
		const selectedRows$1 = new Set(rawSelectedRows);
		for (const row$1 of rows) if (isGroupRow(row$1)) {
			const isGroupRowSelected = row$1.childRows.every((cr) => rawSelectedRows.has(rawRowKeyGetter(cr)));
			if (isGroupRowSelected) selectedRows$1.add(row$1.id);
		}
		return selectedRows$1;
	}, [
		isGroupRow,
		rawRowKeyGetter,
		rawSelectedRows,
		rows
	]);
	function onSelectedRowsChange(newSelectedRows) {
		if (!rawOnSelectedRowsChange) return;
		assertIsValidKeyGetter(rawRowKeyGetter);
		const newRawSelectedRows = new Set(rawSelectedRows);
		for (const row$1 of rows) {
			const key = rowKeyGetter(row$1);
			if (selectedRows?.has(key) && !newSelectedRows.has(key)) if (isGroupRow(row$1)) for (const cr of row$1.childRows) newRawSelectedRows.delete(rawRowKeyGetter(cr));
			else newRawSelectedRows.delete(key);
			else if (!selectedRows?.has(key) && newSelectedRows.has(key)) if (isGroupRow(row$1)) for (const cr of row$1.childRows) newRawSelectedRows.add(rawRowKeyGetter(cr));
			else newRawSelectedRows.add(key);
		}
		rawOnSelectedRowsChange(newRawSelectedRows);
	}
	function handleKeyDown(args, event) {
		rawOnCellKeyDown?.(args, event);
		if (event.isGridDefaultPrevented()) return;
		if (args.mode === "EDIT") return;
		const { column, rowIdx, selectCell } = args;
		const idx = column?.idx ?? -1;
		const row$1 = rows[rowIdx];
		if (!isGroupRow(row$1)) return;
		if (idx === -1 && (event.key === leftKey && row$1.isExpanded || event.key === rightKey && !row$1.isExpanded)) {
			event.preventDefault();
			event.preventGridDefault();
			toggleGroup(row$1.id);
		}
		if (idx === -1 && event.key === leftKey && !row$1.isExpanded && row$1.level !== 0) {
			const parentRowAndIndex = getParentRowAndIndex(row$1);
			if (parentRowAndIndex !== void 0) {
				event.preventGridDefault();
				selectCell({
					idx,
					rowIdx: parentRowAndIndex[1]
				});
			}
		}
	}
	function handleCellCopy({ row: row$1, column }, event) {
		if (!isGroupRow(row$1)) rawOnCellCopy?.({
			row: row$1,
			column
		}, event);
	}
	function handleCellPaste({ row: row$1, column }, event) {
		return isGroupRow(row$1) ? row$1 : rawOnCellPaste({
			row: row$1,
			column
		}, event);
	}
	function handleRowsChange(updatedRows, { indexes, column }) {
		if (!onRowsChange) return;
		const updatedRawRows = [...rawRows];
		const rawIndexes = [];
		for (const index of indexes) {
			const rawIndex = rawRows.indexOf(rows[index]);
			updatedRawRows[rawIndex] = updatedRows[index];
			rawIndexes.push(rawIndex);
		}
		onRowsChange(updatedRawRows, {
			indexes: rawIndexes,
			column
		});
	}
	function toggleGroup(groupId) {
		const newExpandedGroupIds = new Set(expandedGroupIds);
		if (newExpandedGroupIds.has(groupId)) newExpandedGroupIds.delete(groupId);
		else newExpandedGroupIds.add(groupId);
		onExpandedGroupIdsChange(newExpandedGroupIds);
	}
	function renderRow(key, { row: row$1, rowClass, onCellMouseDown, onCellClick, onCellDoubleClick, onCellContextMenu, onRowChange, lastFrozenColumnIndex, draggedOverCellIdx, selectedCellEditor,...rowProps }) {
		if (isGroupRow(row$1)) {
			const { startRowIndex } = row$1;
			return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(GroupRow_default, {
				...rowProps,
				"aria-rowindex": headerAndTopSummaryRowsCount + startRowIndex + 1,
				row: row$1,
				groupBy,
				toggleGroup: toggleGroupLatest
			}, key);
		}
		let ariaRowIndex = rowProps["aria-rowindex"];
		const parentRowAndIndex = getParentRowAndIndex(row$1);
		if (parentRowAndIndex !== void 0) {
			const { startRowIndex, childRows } = parentRowAndIndex[0];
			const groupIndex = childRows.indexOf(row$1);
			ariaRowIndex = startRowIndex + headerAndTopSummaryRowsCount + groupIndex + 2;
		}
		return rawRenderRow(key, {
			...rowProps,
			"aria-rowindex": ariaRowIndex,
			row: row$1,
			rowClass,
			onCellMouseDown,
			onCellClick,
			onCellDoubleClick,
			onCellContextMenu,
			onRowChange,
			lastFrozenColumnIndex,
			draggedOverCellIdx,
			selectedCellEditor
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(DataGrid, {
		...props,
		role: "treegrid",
		"aria-rowcount": rowsCount + 1 + (props.topSummaryRows?.length ?? 0) + (props.bottomSummaryRows?.length ?? 0),
		columns,
		rows,
		rowHeight,
		rowKeyGetter,
		onRowsChange: handleRowsChange,
		selectedRows,
		onSelectedRowsChange,
		onCellKeyDown: handleKeyDown,
		onCellCopy: handleCellCopy,
		onCellPaste: rawOnCellPaste ? handleCellPaste : void 0,
		renderers: {
			...renderers,
			renderRow
		}
	});
}
function defaultGroupIdGetter(groupKey, parentId) {
	return parentId !== void 0 ? `${parentId}__${groupKey}` : groupKey;
}
function isReadonlyArray(arr) {
	return Array.isArray(arr);
}

//#endregion
//#region src/editors/textEditor.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
const textEditorInternalClassname = "t7vyx3i7-0-0-beta-52";
const textEditorClassname = `rdg-text-editor ${textEditorInternalClassname}`;
function autoFocusAndSelect(input) {
	input?.focus();
	input?.select();
}
function textEditor({ row: row$1, column, onRowChange, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: textEditorClassname,
		ref: autoFocusAndSelect,
		value: row$1[column.key],
		onChange: (event) => onRowChange({
			...row$1,
			[column.key]: event.target.value
		}),
		onBlur: () => onClose(true, false)
	});
}

//#endregion
export { Cell_default as Cell, DataGrid, DataGridDefaultRenderersContext, Row_default as Row, SELECT_COLUMN_KEY, SelectCellFormatter, SelectColumn, ToggleGroup, TreeDataGrid, renderCheckbox, renderHeaderCell, renderSortIcon, renderSortPriority, renderToggleGroup, renderValue, textEditor, useHeaderRowSelection, useRowSelection };
//# sourceMappingURL=index.js.map