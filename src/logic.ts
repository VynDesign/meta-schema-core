import { TMetaSchemaProperty, SimpleStructures, TSimpleStructures, TComplexMetaSchemaProperty } from './interfaces'

export const walkSchema = async <T>(metaSchema: TMetaSchemaProperty[], result?: T, callbacks?: { whenSimple?: Function, whenObject?: Function, whenArray?: Function }): Promise<T> => {
    for (const prop of metaSchema) {

    }
    return result
}

// #region scaffold object

export const scaffoldObject = (metaSchema: TMetaSchemaProperty[]) => {
    let result: any = {}
    for (const prop of metaSchema) {
        if (SimpleStructures.includes(prop._structureType as TSimpleStructures)) {
            if (prop.isArray) {
                result[prop.propertyName] = []
            } else {
                result[prop.propertyName] = null
            }
        } else {
            result[prop.propertyName] = scaffoldComplexStructureType(prop as TComplexMetaSchemaProperty)
        }
    }
    return result
}

export const scaffoldComplexStructureType = (prop: TComplexMetaSchemaProperty) => {
    if (prop.isArray) {
        return [scaffoldObject(prop.metaSchema)]
    } else {
        return scaffoldObject(prop.metaSchema)
    }
}

// #endregion
