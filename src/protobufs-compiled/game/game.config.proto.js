/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.gameConfig = (function() {

    /**
     * Namespace gameConfig.
     * @exports gameConfig
     * @namespace
     */
    var gameConfig = {};

    gameConfig.Options = (function() {

        /**
         * Properties of an Options.
         * @memberof gameConfig
         * @interface IOptions
         * @property {boolean} [playBackgroundMusic] Options playBackgroundMusic
         * @property {number} [targetWorkerFps] Options targetWorkerFps
         * @property {number} [workerIterationJump] Options workerIterationJump
         * @property {number} [minimumIterations] Options minimumIterations
         */

        /**
         * Constructs a new Options.
         * @memberof gameConfig
         * @classdesc Represents an Options.
         * @constructor
         * @param {gameConfig.IOptions=} [properties] Properties to set
         */
        function Options(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Options playBackgroundMusic.
         * @member {boolean}playBackgroundMusic
         * @memberof gameConfig.Options
         * @instance
         */
        Options.prototype.playBackgroundMusic = false;

        /**
         * Options targetWorkerFps.
         * @member {number}targetWorkerFps
         * @memberof gameConfig.Options
         * @instance
         */
        Options.prototype.targetWorkerFps = 0;

        /**
         * Options workerIterationJump.
         * @member {number}workerIterationJump
         * @memberof gameConfig.Options
         * @instance
         */
        Options.prototype.workerIterationJump = 0;

        /**
         * Options minimumIterations.
         * @member {number}minimumIterations
         * @memberof gameConfig.Options
         * @instance
         */
        Options.prototype.minimumIterations = 0;

        /**
         * Creates a new Options instance using the specified properties.
         * @function create
         * @memberof gameConfig.Options
         * @static
         * @param {gameConfig.IOptions=} [properties] Properties to set
         * @returns {gameConfig.Options} Options instance
         */
        Options.create = function create(properties) {
            return new Options(properties);
        };

        /**
         * Encodes the specified Options message. Does not implicitly {@link gameConfig.Options.verify|verify} messages.
         * @function encode
         * @memberof gameConfig.Options
         * @static
         * @param {gameConfig.IOptions} message Options message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Options.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playBackgroundMusic != null && message.hasOwnProperty("playBackgroundMusic"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.playBackgroundMusic);
            if (message.targetWorkerFps != null && message.hasOwnProperty("targetWorkerFps"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.targetWorkerFps);
            if (message.workerIterationJump != null && message.hasOwnProperty("workerIterationJump"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.workerIterationJump);
            if (message.minimumIterations != null && message.hasOwnProperty("minimumIterations"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.minimumIterations);
            return writer;
        };

        /**
         * Encodes the specified Options message, length delimited. Does not implicitly {@link gameConfig.Options.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameConfig.Options
         * @static
         * @param {gameConfig.IOptions} message Options message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Options.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Options message from the specified reader or buffer.
         * @function decode
         * @memberof gameConfig.Options
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameConfig.Options} Options
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Options.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameConfig.Options();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playBackgroundMusic = reader.bool();
                    break;
                case 2:
                    message.targetWorkerFps = reader.int32();
                    break;
                case 3:
                    message.workerIterationJump = reader.int32();
                    break;
                case 4:
                    message.minimumIterations = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Options message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameConfig.Options
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameConfig.Options} Options
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Options.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Options message.
         * @function verify
         * @memberof gameConfig.Options
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Options.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playBackgroundMusic != null && message.hasOwnProperty("playBackgroundMusic"))
                if (typeof message.playBackgroundMusic !== "boolean")
                    return "playBackgroundMusic: boolean expected";
            if (message.targetWorkerFps != null && message.hasOwnProperty("targetWorkerFps"))
                if (!$util.isInteger(message.targetWorkerFps))
                    return "targetWorkerFps: integer expected";
            if (message.workerIterationJump != null && message.hasOwnProperty("workerIterationJump"))
                if (!$util.isInteger(message.workerIterationJump))
                    return "workerIterationJump: integer expected";
            if (message.minimumIterations != null && message.hasOwnProperty("minimumIterations"))
                if (!$util.isInteger(message.minimumIterations))
                    return "minimumIterations: integer expected";
            return null;
        };

        /**
         * Creates an Options message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gameConfig.Options
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gameConfig.Options} Options
         */
        Options.fromObject = function fromObject(object) {
            if (object instanceof $root.gameConfig.Options)
                return object;
            var message = new $root.gameConfig.Options();
            if (object.playBackgroundMusic != null)
                message.playBackgroundMusic = Boolean(object.playBackgroundMusic);
            if (object.targetWorkerFps != null)
                message.targetWorkerFps = object.targetWorkerFps | 0;
            if (object.workerIterationJump != null)
                message.workerIterationJump = object.workerIterationJump | 0;
            if (object.minimumIterations != null)
                message.minimumIterations = object.minimumIterations | 0;
            return message;
        };

        /**
         * Creates a plain object from an Options message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gameConfig.Options
         * @static
         * @param {gameConfig.Options} message Options
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Options.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.playBackgroundMusic = false;
                object.targetWorkerFps = 0;
                object.workerIterationJump = 0;
                object.minimumIterations = 0;
            }
            if (message.playBackgroundMusic != null && message.hasOwnProperty("playBackgroundMusic"))
                object.playBackgroundMusic = message.playBackgroundMusic;
            if (message.targetWorkerFps != null && message.hasOwnProperty("targetWorkerFps"))
                object.targetWorkerFps = message.targetWorkerFps;
            if (message.workerIterationJump != null && message.hasOwnProperty("workerIterationJump"))
                object.workerIterationJump = message.workerIterationJump;
            if (message.minimumIterations != null && message.hasOwnProperty("minimumIterations"))
                object.minimumIterations = message.minimumIterations;
            return object;
        };

        /**
         * Converts this Options to JSON.
         * @function toJSON
         * @memberof gameConfig.Options
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Options.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Options;
    })();

    return gameConfig;
})();

module.exports = $root;
