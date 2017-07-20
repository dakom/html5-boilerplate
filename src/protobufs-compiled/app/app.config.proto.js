/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.appConfig = (function() {

    /**
     * Namespace appConfig.
     * @exports appConfig
     * @namespace
     */
    var appConfig = {};

    appConfig.Info = (function() {

        /**
         * Properties of an Info.
         * @memberof appConfig
         * @interface IInfo
         * @property {string} [version] Info version
         */

        /**
         * Constructs a new Info.
         * @memberof appConfig
         * @classdesc Represents an Info.
         * @constructor
         * @param {appConfig.IInfo=} [properties] Properties to set
         */
        function Info(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Info version.
         * @member {string}version
         * @memberof appConfig.Info
         * @instance
         */
        Info.prototype.version = "";

        /**
         * Creates a new Info instance using the specified properties.
         * @function create
         * @memberof appConfig.Info
         * @static
         * @param {appConfig.IInfo=} [properties] Properties to set
         * @returns {appConfig.Info} Info instance
         */
        Info.create = function create(properties) {
            return new Info(properties);
        };

        /**
         * Encodes the specified Info message. Does not implicitly {@link appConfig.Info.verify|verify} messages.
         * @function encode
         * @memberof appConfig.Info
         * @static
         * @param {appConfig.IInfo} message Info message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Info.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && message.hasOwnProperty("version"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.version);
            return writer;
        };

        /**
         * Encodes the specified Info message, length delimited. Does not implicitly {@link appConfig.Info.verify|verify} messages.
         * @function encodeDelimited
         * @memberof appConfig.Info
         * @static
         * @param {appConfig.IInfo} message Info message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Info.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Info message from the specified reader or buffer.
         * @function decode
         * @memberof appConfig.Info
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {appConfig.Info} Info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Info.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.appConfig.Info();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Info message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof appConfig.Info
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {appConfig.Info} Info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Info.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Info message.
         * @function verify
         * @memberof appConfig.Info
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Info.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isString(message.version))
                    return "version: string expected";
            return null;
        };

        /**
         * Creates an Info message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof appConfig.Info
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {appConfig.Info} Info
         */
        Info.fromObject = function fromObject(object) {
            if (object instanceof $root.appConfig.Info)
                return object;
            var message = new $root.appConfig.Info();
            if (object.version != null)
                message.version = String(object.version);
            return message;
        };

        /**
         * Creates a plain object from an Info message. Also converts values to other types if specified.
         * @function toObject
         * @memberof appConfig.Info
         * @static
         * @param {appConfig.Info} message Info
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Info.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.version = "";
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            return object;
        };

        /**
         * Converts this Info to JSON.
         * @function toJSON
         * @memberof appConfig.Info
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Info.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Info;
    })();

    return appConfig;
})();

module.exports = $root;
