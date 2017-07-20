import * as $protobuf from "protobufjs";

/** Namespace appConfig. */
export namespace appConfig {

    /** Properties of an Info. */
    interface IInfo {

        /** Info version */
        version?: string;
    }

    /** Represents an Info. */
    class Info {

        /**
         * Constructs a new Info.
         * @param [properties] Properties to set
         */
        constructor(properties?: appConfig.IInfo);

        /** Info version. */
        public version: string;

        /**
         * Creates a new Info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Info instance
         */
        public static create(properties?: appConfig.IInfo): appConfig.Info;

        /**
         * Encodes the specified Info message. Does not implicitly {@link appConfig.Info.verify|verify} messages.
         * @param message Info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: appConfig.IInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Info message, length delimited. Does not implicitly {@link appConfig.Info.verify|verify} messages.
         * @param message Info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: appConfig.IInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): appConfig.Info;

        /**
         * Decodes an Info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): appConfig.Info;

        /**
         * Verifies an Info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Info message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Info
         */
        public static fromObject(object: { [k: string]: any }): appConfig.Info;

        /**
         * Creates a plain object from an Info message. Also converts values to other types if specified.
         * @param message Info
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: appConfig.Info, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Info to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
