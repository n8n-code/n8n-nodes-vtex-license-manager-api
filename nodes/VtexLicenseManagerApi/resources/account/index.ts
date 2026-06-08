import type { INodeProperties } from 'n8n-workflow';

export const accountDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					]
				}
			},
			"options": [
				{
					"name": "Get Account",
					"value": "Get Account",
					"action": "Get information about account",
					"description": "Retrieves information from an account, such as company and sponsor user details, stores, and appTokens.\n\r\n\rThis endpoint only accepts requests from the host list designated for that store. If you want to try this request from this portal, be sure to add it to the list. Learn how to add hosts to the list in [How to manage accounts](https://help.vtex.com/en/tutorial/how-to-manage-accounts--tutorials_6285#).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/vlm/account"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/vlm/account",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account"
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
						"Account"
					],
					"operation": [
						"Get Account"
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
						"Account"
					],
					"operation": [
						"Get Account"
					]
				}
			}
		},
];
