export interface MetaSchemaProperty {
    _structureType: 'simple' | 'nested' | 'listbound'
    propertyName: string
    displayName: string
    dataType: 'String' | 'Number' | 'Date' | 'Boolean' | 'Array' | 'Object'
    isRequired?: Boolean
}

export interface SimpleMetaSchemaProperty extends MetaSchemaProperty {
    _structureType: 'simple'
    dataType: 'String' | 'Number' | 'Date' | 'Boolean'
}

export interface ListBoundMetaSchemaProperty extends MetaSchemaProperty {
    _structureType: 'listbound'
    dataType: 'String'
    values: {
        listKey: string
        valueKey?: string
    }
}

export interface NestedMetaSchemaProperty extends MetaSchemaProperty {
    _structureType: 'nested'
    dataType: 'Array' | 'Object'
    metaSchema: MetaSchemaPropertyType[]
}

export type MetaSchemaPropertyType = SimpleMetaSchemaProperty | ListBoundMetaSchemaProperty | NestedMetaSchemaProperty

export interface MetaModel {
    name: string
    collectionName: string
    metaSchema: MetaSchemaPropertyType[]
}
