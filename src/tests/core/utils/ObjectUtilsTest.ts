import { expect } from 'chai';
import { ObjectUtils,ValidationOptions} from '../../../app/core/utils/ObjectUtils';

export class ObjectUtilsTest {
    static RunTests() {
        describe('ObjectUtils Validate()', () => {
            let iter:number = 1;

            it('should fail ' + iter++, () => {
                    expect(ObjectUtils.Validate({
                        
                    })).to.equal(false);
            });

            it('should fail ' + iter++, () => {
                    expect(ObjectUtils.Validate({
                        foo: [

                        ]         
                    })).to.equal(false);
            });

            it('should fail ' + iter++, () => {
                    expect(ObjectUtils.Validate({
                        foo: [
                            {
                                str: ""
                            }
                        ]         
                    })).to.equal(false);
            });

            it('should pass ' + iter++, () => {
                    expect(ObjectUtils.Validate({
                        foo: [
                            {
                                str: "Hello"
                            }
                        ]         
                    })).to.equal(true);
            });

            it('should fail ' + iter++, () => {
                    expect(ObjectUtils.Validate({
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
                    expect(ObjectUtils.Validate({
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
                    let opts:ValidationOptions = new ValidationOptions();
                    opts.numberZeroAllowed = false;

                    expect(ObjectUtils.Validate({
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
                    expect(ObjectUtils.Validate({
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
                    expect(ObjectUtils.Validate({
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
                    let opts:ValidationOptions = new ValidationOptions();
                    opts.stringEmptyAllowed = true;

                    expect(ObjectUtils.Validate({
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
                    let opts:ValidationOptions = new ValidationOptions();
                    opts.numberNegativeAllowed = false;

                    expect(ObjectUtils.Validate({
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
                    expect(ObjectUtils.Validate({
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