import { expect } from 'chai';
import { ObjectUtils,EverythingIsSetOptions } from '../../../app/core/utils/ObjectUtils';

export class ObjectUtilsTest {
    static RunTests() {
        describe('ObjectUtils EverythingIsSet()', () => {
            let iter:number = 1;

            it('should fail ' + iter++, () => {
                    expect(ObjectUtils.EverythingIsSet({
                        
                    })).to.equal(false);
            });

            it('should fail ' + iter++, () => {
                    expect(ObjectUtils.EverythingIsSet({
                        foo: [

                        ]         
                    })).to.equal(false);
            });

            it('should fail ' + iter++, () => {
                    expect(ObjectUtils.EverythingIsSet({
                        foo: [
                            {
                                str: ""
                            }
                        ]         
                    })).to.equal(false);
            });

            it('should pass ' + iter++, () => {
                    expect(ObjectUtils.EverythingIsSet({
                        foo: [
                            {
                                str: "Hello"
                            }
                        ]         
                    })).to.equal(true);
            });

            it('should fail ' + iter++, () => {
                    expect(ObjectUtils.EverythingIsSet({
                        foo: [
                            {
                                str: ""
                            }
                        ],
                        bar: {

                        }         
                    })).to.equal(false);
            });

            it('should pass ' + iter++, () => {
                    expect(ObjectUtils.EverythingIsSet({
                        foo: [
                            {
                                str: "Hello"
                            }
                        ],
                        bar: {
                            val: 0,             
                        }         
                    })).to.equal(true);
            });

            it('should fail ' + iter++, () => {
                    let opts:EverythingIsSetOptions = new EverythingIsSetOptions();
                    opts.numberZeroAllowed = false;

                    expect(ObjectUtils.EverythingIsSet({
                        foo: [
                            {
                                str: "Hello"
                            }
                        ],
                        bar: {
                            val: 0,             
                        }         
                    }, opts)).to.equal(false);
            });

            it('should fail ' + iter++, () => {
                    expect(ObjectUtils.EverythingIsSet({
                        foo: [
                            {
                                str: "Hello"
                            }
                        ],
                        bar: {
                            val: 0,
                            vals: [
                                1,
                                "two",
                                ""
                            ]        
                        }         
                    })).to.equal(false);
            });

            it('should pass ' + iter++, () => {
                    expect(ObjectUtils.EverythingIsSet({
                        foo: [
                            {
                                str: "Hello"
                            }
                        ],
                        bar: {
                            val: 0,
                            vals: [
                                1,
                                "two",
                                "three"
                            ]        
                        }         
                    })).to.equal(true);
            });

            it('should pass ' + iter++, () => {
                    let opts:EverythingIsSetOptions = new EverythingIsSetOptions();
                    opts.stringEmptyAllowed = true;

                    expect(ObjectUtils.EverythingIsSet({
                        foo: [
                            {
                                str: "Hello"
                            }
                        ],
                        bar: {
                            val: 0,
                            vals: [
                                1,
                                "two",
                                ""
                            ]        
                        }         
                    }, opts)).to.equal(true);
            });

            it('should fail ' + iter++, () => {
                    let opts:EverythingIsSetOptions = new EverythingIsSetOptions();
                    opts.numberNegativeAllowed = false;

                    expect(ObjectUtils.EverythingIsSet({
                        foo: [
                            {
                                str: "Hello"
                            }
                        ],
                        bar: {
                            val: 0,
                            vals: [
                                -1,
                                "two"
                            ]        
                        }         
                    }, opts)).to.equal(false);
            });

            it('should pass ' + iter++, () => {
                    expect(ObjectUtils.EverythingIsSet({
                        foo: [
                            {
                                str: "Hello"
                            }
                        ],
                        bar: {
                            val: 0,
                            vals: [
                                -1,
                                "two"
                            ]        
                        }         
                    })).to.equal(true);
            });
        });
    }
}