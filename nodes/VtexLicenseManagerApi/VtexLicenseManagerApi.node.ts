import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { userDescription } from './resources/user';
import { appKeysDescription } from './resources/app-keys';
import { rolesDescription } from './resources/roles';
import { storeDescription } from './resources/store';
import { accountDescription } from './resources/account';

export class VtexLicenseManagerApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'vtex-license-manager-api',
		name: 'N8nDevVtexLicenseManagerApi',
		icon: { light: 'file:./vtex-license-manager-api.svg', dark: 'file:./vtex-license-manager-api.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Welcome!',
		defaults: { name: 'vtex-license-manager-api' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevVtexLicenseManagerApiApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "User",
					"value": "User",
					"description": ""
				},
				{
					"name": "App Keys",
					"value": "App Keys",
					"description": ""
				},
				{
					"name": "Roles",
					"value": "Roles",
					"description": ""
				},
				{
					"name": "Store",
					"value": "Store",
					"description": ""
				},
				{
					"name": "Account",
					"value": "Account",
					"description": ""
				}
			],
			"default": ""
		},
		...userDescription,
		...appKeysDescription,
		...rolesDescription,
		...storeDescription,
		...accountDescription
		],
	};
}
