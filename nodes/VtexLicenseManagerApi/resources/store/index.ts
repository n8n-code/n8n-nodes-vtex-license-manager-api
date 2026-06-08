import type { INodeProperties } from 'n8n-workflow';

export const storeDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Store"
					]
				}
			},
			"options": [
				{
					"name": "Get By Account",
					"value": "Get By Account",
					"action": "Get Stores",
					"description": "Gets the stores and respective hosts of the account",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/vlm/account/stores"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/vlm/account/stores",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Store"
					],
					"operation": [
						"Get By Account"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Store"
					],
					"operation": [
						"Get By Account"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Store"
					],
					"operation": [
						"Get By Account"
					]
				}
			}
		},
];
