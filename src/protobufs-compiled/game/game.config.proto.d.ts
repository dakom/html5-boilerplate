import * as $protobuf from "protobufjs";

/** Namespace gameConfig. */
export namespace gameConfig {

    /** Properties of an Options. */
    interface IOptions {

        /** Options playBackgroundMusic */
        playBackgroundMusic?: boolean;

        /** Options targetWorkerFps */
        targetWorkerFps?: number;

        /** Options workerIterationJump */
        workerIterationJump?: number;

        /** Options minimumIterations */
        minimumIterations?: number;
    }

    /** Represents an Options. */
    class Options {

        /**
         * Constructs a new Options.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameConfig.IOptions);

        /** Options playBackgroundMusic. */
        public playBackgroundMusic: boolean;

        /** Options targetWorkerFps. */
        public targetWorkerFps: number;

        /** Options workerIterationJump. */
        public workerIterationJump: number;

        /** Options minimumIterations. */
        public minimumIterations: number;

        /**
         * Creates a new Options instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Options instance
         */
        public static create(properties?: gameConfig.IOptions): gameConfig.Options;

        /**
         * Encodes the specified Options message. Does not implicitly {@link gameConfig.Options.verify|verify} messages.
         * @param message Options message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameConfig.IOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Options message, length delimited. Does not implicitly {@link gameConfig.Options.verify|verify} messages.
         * @param message Options message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameConfig.IOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Options message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Options
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameConfig.Options;

        /**
         * Decodes an Options message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Options
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameConfig.Options;

        /**
         * Verifies an Options message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Options message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Options
         */
        public static fromObject(object: { [k: string]: any }): gameConfig.Options;

        /**
         * Creates a plain object from an Options message. Also converts values to other types if specified.
         * @param message Options
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameConfig.Options, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Options to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
