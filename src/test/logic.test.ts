import assert from 'assert'
import { TMetaSchemaProperty, ISimpleMetaSchemaProperty, TComplexMetaSchemaProperty } from '../interfaces'
import * as logic from '../logic'

// #region examples

//#region simple schema def example

const simpleMetaSchemaExample = [
    {
        _structureType: 'simple',
        dataType: 'string',
        propertyName: 'name'        
    } as ISimpleMetaSchemaProperty,
    {
        _structureType: 'simple',
        dataType: 'date',
        propertyName: 'birthDate'
    } as ISimpleMetaSchemaProperty,
    {
        _structureType: 'simple',
        dataType: 'boolean',
        propertyName: 'married'
    } as ISimpleMetaSchemaProperty,
    {
        _structureType: 'simple',
        dataType: 'number',
        propertyName: 'childCount'
    }
] as TMetaSchemaProperty[]

// #endregion

// #region complex schema def example

const personNameSchema = [
    {
        _structureType: 'simple',
        dataType: 'string',
        propertyName: 'first'
    } as ISimpleMetaSchemaProperty,
    {
        _structureType: 'simple',
        dataType: 'string',
        propertyName: 'middle'
    } as ISimpleMetaSchemaProperty,
    {
        _structureType: 'simple',
        dataType: 'string',
        propertyName: 'last'
    } as ISimpleMetaSchemaProperty
] as TMetaSchemaProperty[]

const complexMetaSchemaExample = [
    {
        _structureType: 'complex',
        dataType: 'object',
        propertyName: 'name',
        metaSchema: personNameSchema
    } as TComplexMetaSchemaProperty,
    {
        _structureType: 'complex',
        dataType: 'object',
        propertyName: 'children',
        isArray: true,
        metaSchema: [
            {
                _structureType: 'complex',
                dataType: 'object',
                propertyName: 'name',
                metaSchema: personNameSchema
            } as TComplexMetaSchemaProperty
        ] as TMetaSchemaProperty[]
    } as TComplexMetaSchemaProperty
] as TMetaSchemaProperty[]

// #endregion

// #endregion

describe('logic', () => {
    describe('walkSchema', () => {
        it('should iterate over the properties of a simple schema', () => {
            assert(false)
        })

        it('should iterate over the properties of a complex schema including sub object properties', () => {
            assert(false)
        })
    })

    describe('scaffoldObject', () => {
        describe('simple schema', () => {
            it('should iterate over the properties of a simple schema and generate an object containing all properties', () => {
                const result = logic.scaffoldObject(simpleMetaSchemaExample)
                for (const prop of simpleMetaSchemaExample) {
                    assert.deepStrictEqual(result[prop.propertyName], null)
                }
            })
        })

        describe('complex schema', () => {
            it('should iterate over the properties of a complex schema and generate an object containing all properties including sub object props', () => {
                const result = logic.scaffoldObject(complexMetaSchemaExample)
                assert.deepStrictEqual(result.name.first, null)
                assert.deepStrictEqual(result.name.middle, null)
                assert.deepStrictEqual(result.name.last, null)
                assert.deepStrictEqual(result.children[0].name.first, null)
                assert.deepStrictEqual(result.children[0].name.middle, null)
                assert.deepStrictEqual(result.children[0].name.last, null)
            })
        })
    })
})
