import * as path from 'path';

import { ApiProperty as ap } from '@nestjs/swagger';

import 'reflect-metadata';

// export function ApiProperty(options: any) {
//     return function (target: any, propertyKey: string) {
//         ap(options)(target, propertyKey);
//         // You can also add custom metadata if needed
//         Reflect.defineMetadata('swagger:metadata', options, target, propertyKey);
//     };
// }
// const swaggerRegistry = new Set<string>();
// export function ApiProperty(options: any, moduleName: string) {
//     return function (target: any, propertyKey: string) {
//         // Create a unique identifier for the property
//         const propertyKeyUnique = `${moduleName}:${propertyKey}`;

//         // Check if this property has already been registered
//         if (!swaggerRegistry.has(propertyKeyUnique)) {
//             // Add the property to the registry to avoid duplication
//             swaggerRegistry.add(propertyKeyUnique);

//             // Apply the ApiProperty decorator with the unique identifier
//             ap({ ...options, name: propertyKeyUnique })(target, propertyKey);

//             // Optionally define metadata for the property
//             Reflect.defineMetadata('swagger:metadata', { ...options }, target, propertyKey);
//         }
//     };
// }
// const swaggerRegistry = new Set<string>();

// export function ApiProperty(options: any) {
//     return function (target: any, propertyKey: string) {
//         // Get the class name
//         const className = target.constructor.name;

//         // Create a unique name based on class name and property key
//         const propertyKeyUnique = `${className}:${propertyKey}`;

//         // Check if this property has already been registered
//         if (!swaggerRegistry.has(propertyKeyUnique)) {
//             // Add the property to the registry to avoid duplication
//             swaggerRegistry.add(propertyKeyUnique);

//             // Apply the ApiProperty decorator with the unique identifier
//             ap({ ...options, name: propertyKeyUnique })(target, propertyKey);

//             // Optionally define metadata for the property
//             Reflect.defineMetadata('swagger:metadata', { ...options }, target, propertyKey);
//         }
//     };
// }
const swaggerRegistry = new Set<string>();

export function ApiProperty(options: any) {
    return function (target: any, propertyKey: string) {
        const className = target.constructor.name;
        const uniqueKey = `${className}_${propertyKey}`;

        // Register with ApiProperty and add unique metadata
        ap({ ...options, name: uniqueKey })(target, propertyKey);
        Reflect.defineMetadata('swagger:unique', uniqueKey, target, propertyKey);
    };
}
