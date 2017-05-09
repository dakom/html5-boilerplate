import * as $protobuf from "protobufjs";

/**
 * Namespace appConfig.
 * @exports appConfig
 * @namespace
 */
export namespace appConfig {

    type Info$Properties = {
        version?: string;
    };

    /**
     * Constructs a new Info.
     * @exports appConfig.Info
     * @constructor
     * @param {appConfig.Info$Properties=} [properties] Properties to set
     */
    class Info {

        /**
         * Constructs a new Info.
         * @exports appConfig.Info
         * @constructor
         * @param {appConfig.Info$Properties=} [properties] Properties to set
         */
        constructor(properties?: appConfig.Info$Properties);

        /**
         * Info version.
         * @type {string}
         */
        public version: string;

        /**
         * Creates a new Info instance using the specified properties.
         * @param {appConfig.Info$Properties=} [properties] Properties to set
         * @returns {appConfig.Info} Info instance
         */
        public static create(properties?: appConfig.Info$Properties): appConfig.Info;

        /**
         * Encodes the specified Info message. Does not implicitly {@link appConfig.Info.verify|verify} messages.
         * @param {appConfig.Info$Properties} message Info message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encode(message: appConfig.Info$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Info message, length delimited. Does not implicitly {@link appConfig.Info.verify|verify} messages.
         * @param {appConfig.Info$Properties} message Info message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encodeDelimited(message: appConfig.Info$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Info message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {appConfig.Info} Info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): appConfig.Info;

        /**
         * Decodes an Info message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {appConfig.Info} Info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): appConfig.Info;

        /**
         * Verifies an Info message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string;

        /**
         * Creates an Info message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {appConfig.Info} Info
         */
        public static fromObject(object: { [k: string]: any }): appConfig.Info;

        /**
         * Creates an Info message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link appConfig.Info.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {appConfig.Info} Info
         */
        public static from(object: { [k: string]: any }): appConfig.Info;

        /**
         * Creates a plain object from an Info message. Also converts values to other types if specified.
         * @param {appConfig.Info} message Info
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public static toObject(message: appConfig.Info, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this Info message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this Info to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
