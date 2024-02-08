export type SimpleDataTypes = 'string' | 'number' | 'boolean' | 'date'
export type ComplexDataTypes = 'array' | 'object'

export interface WhenExpression {
    prop: string
    is?: boolean | string | [string]
    not?: boolean | string | [string]
}

export interface Expression {
    when?: WhenExpression
}

export interface MetaSchemaProperty {
    _structureType: 'simple' | 'complex'
    dataType: SimpleDataTypes | ComplexDataTypes
    propertyName: string
    displayName?: string
    description?: string
    isRequired?: boolean | Expression
    enabled?: boolean | Expression
}

export interface EnumeratedValueOption {
    value: string | number
    displayValue?: string
}

export interface SimpleMetaSchemaProperty extends MetaSchemaProperty {
    _structureType: 'simple'
    dataType: SimpleDataTypes
    valueEncoding?: string
    enumerated?: {
        selectionType: 'single' | 'multiple'
        possibleValues: EnumeratedValueOption[]
    }
}

export interface ComplexMetaSchemaProperty extends MetaSchemaProperty {
    _structureType: 'complex'
    dataType: ComplexDataTypes
    metaSchema: MetaSchemaPropertyType[]
}

export type MetaSchemaPropertyType = SimpleMetaSchemaProperty | ComplexMetaSchemaProperty

export interface MetaModel {
    name: string
    metaSchema: MetaSchemaPropertyType[]
}
