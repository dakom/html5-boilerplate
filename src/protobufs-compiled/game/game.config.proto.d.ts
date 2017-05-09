import * as $protobuf from "protobufjs";

/**
 * Namespace gameConfig.
 * @exports gameConfig
 * @namespace
 */
export namespace gameConfig {

    type Options$Properties = {
        playBackgroundMusic?: boolean;
        targetWorkerFps?: number;
        workerIterationJump?: number;
        minimumIterations?: number;
    };

    /**
     * Constructs a new Options.
     * @exports gameConfig.Options
     * @constructor
     * @param {gameConfig.Options$Properties=} [properties] Properties to set
     */
    class Options {

        /**
         * Constructs a new Options.
         * @exports gameConfig.Options
         * @constructor
         * @param {gameConfig.Options$Properties=} [properties] Properties to set
         */
        constructor(properties?: gameConfig.Options$Properties);

        /**
         * Options playBackgroundMusic.
         * @type {boolean}
         */
        public playBackgroundMusic: boolean;

        /**
         * Options targetWorkerFps.
         * @type {number}
         */
        public targetWorkerFps: number;

        /**
         * Options workerIterationJump.
         * @type {number}
         */
        public workerIterationJump: number;

        /**
         * Options minimumIterations.
         * @type {number}
         */
        public minimumIterations: number;

        /**
         * Creates a new Options instance using the specified properties.
         * @param {gameConfig.Options$Properties=} [properties] Properties to set
         * @returns {gameConfig.Options} Options instance
         */
        public static create(properties?: gameConfig.Options$Properties): gameConfig.Options;

        /**
         * Encodes the specified Options message. Does not implicitly {@link gameConfig.Options.verify|verify} messages.
         * @param {gameConfig.Options$Properties} message Options message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encode(message: gameConfig.Options$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Options message, length delimited. Does not implicitly {@link gameConfig.Options.verify|verify} messages.
         * @param {gameConfig.Options$Properties} message Options message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encodeDelimited(message: gameConfig.Options$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Options message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameConfig.Options} Options
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameConfig.Options;

        /**
         * Decodes an Options message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameConfig.Options} Options
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameConfig.Options;

        /**
         * Verifies an Options message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string;

        /**
         * Creates an Options message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {gameConfig.Options} Options
         */
        public static fromObject(object: { [k: string]: any }): gameConfig.Options;

        /**
         * Creates an Options message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link gameConfig.Options.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {gameConfig.Options} Options
         */
        public static from(object: { [k: string]: any }): gameConfig.Options;

        /**
         * Creates a plain object from an Options message. Also converts values to other types if specified.
         * @param {gameConfig.Options} message Options
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public static toObject(message: gameConfig.Options, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this Options message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this Options to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
