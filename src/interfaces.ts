export const SimpleStructures = ['simple', 'enumerated'] as const
type SimpleStructuresTuple = typeof SimpleStructures
export type TSimpleStructures = SimpleStructuresTuple[number]

export const ComplexStructures = ['complex'] as const
type ComplexStructuresTuple = typeof ComplexStructures
export type TComplexStructures = ComplexStructuresTuple[number]

export const Structures = [...SimpleStructures, ...ComplexStructures]
export type TStructures = TSimpleStructures | TComplexStructures

export const SimpleDataTypes = ['string', 'number', 'boolean', 'date'] as const
type SimpleDataTypesTuple = typeof SimpleDataTypes
export type TSimpleDataTypes = SimpleDataTypesTuple[number]

export const ComplexDataTypes = ['object'] as const
type ComplexDataTypesTuple = typeof ComplexDataTypes
export type TComplexDataTypes = ComplexDataTypesTuple[number]

export const DataTypes = [...SimpleDataTypes, ...ComplexDataTypes]
export type TDataTypes = TSimpleDataTypes | TComplexDataTypes

// #region basic interfaces

export interface IDisplayOptions {
    name?: string
    description?: string
}

// #region validation options

export interface IWhenExpression {
    prop: string
    is?: boolean | string | [string]
    not?: boolean | string | [string]
}

export interface IExpression {
    when?: IWhenExpression
}

export interface IValidationOptions {
    nullable?: boolean | IExpression
    required?: boolean | IExpression
    enabled?: boolean | IExpression
}

export interface IArrayValidationOptions {
    itemCount?: {
        minimum?: number
        maximum?: number
    }
}

export type TArrayValidationOptions = IValidationOptions & IArrayValidationOptions

// #endregion

export interface IMetaSchemaProperty {
    _structureType: TStructures
    dataType: TDataTypes
    propertyName: string
    isArray?: boolean
    displayOptions?: IDisplayOptions
    validationOptions?: IValidationOptions | (IValidationOptions & IArrayValidationOptions)
}

// #endregion

// #region simple metaschema property

// #region simple structureType

interface IArraySimpleMetaSchemaProperty {
    isArray: true
    validationOptions?: IValidationOptions & IArrayValidationOptions
}

export interface ISimpleMetaSchemaProperty {
    _structureType: TSimpleStructures
    dataType: TSimpleDataTypes
    valueEncoding?: string
}

export type TArraySimpleMetaSchemaProperty = ISimpleMetaSchemaProperty & IArraySimpleMetaSchemaProperty

//#endregion

// #region enumerated structureType

export interface IEnumeratedValueOption {
    value: string | number
    displayValue?: string
}

export interface IEnumeratedMetaSchemaProperty {
    _structureType: 'enumerated'
    dataType: TSimpleDataTypes
    possibleValues: IEnumeratedValueOption[]
}

export type TEnumeratedMetaSchemaProperty = ISimpleMetaSchemaProperty & IEnumeratedMetaSchemaProperty

export type TArrayEnumeratedMetaSchemaProperty = TEnumeratedMetaSchemaProperty & IArraySimpleMetaSchemaProperty

// #endregion

export type SimpleMetaSchemaProperty = IMetaSchemaProperty & (ISimpleMetaSchemaProperty | TArraySimpleMetaSchemaProperty | TEnumeratedMetaSchemaProperty | TArrayEnumeratedMetaSchemaProperty)

// #endregion

// #region complex metaschema property

export interface ISingleComplexMetaSchemaProperty {
    _structureType: TComplexStructures
    dataType: TComplexDataTypes
    metaSchema: TMetaSchemaProperty[]
}

export type TComplexMetaSchemaProperty = (ISingleComplexMetaSchemaProperty | (ISingleComplexMetaSchemaProperty & IArraySimpleMetaSchemaProperty)) & IMetaSchemaProperty

// #endregion

export type TMetaSchemaProperty = SimpleMetaSchemaProperty | TComplexMetaSchemaProperty
