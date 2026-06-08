import type { INodeProperties } from 'n8n-workflow';

export const userDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					]
				}
			},
			"options": [
				{
					"name": "Get List Users",
					"value": "Get List Users",
					"action": "Get List of Users",
					"description": "Returns a list of registered users. The response is divided in pages. The query parameter `numItems` defines the number of items in each page, and consequently the amount of pages for the whole list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/license-manager/site/pvt/logins/list/paged"
						}
					}
				},
				{
					"name": "Create User",
					"value": "Create User",
					"action": "Create User",
					"description": "Allows you to create a user by providing an email (mandatory) and name (optional). The email must be in a valid format. The success response will contain the generated `userId` for that user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/license-manager/users"
						}
					}
				},
				{
					"name": "Get User",
					"value": "Get User",
					"action": "Get User",
					"description": "Allows you to get a user from the database, using the `userId` as the identifier.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/license-manager/users/{{$parameter[\"userId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/license-manager/site/pvt/logins/list/paged",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get List Users"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "The media type of the body of the request. Default value for license manager protocol is application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get List Users"
					]
				}
			}
		},
		{
			"displayName": "Num Items",
			"name": "numItems",
			"description": "Number of items in the returned page",
			"default": 10,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "numItems",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get List Users"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Which page from the whole list will be returned",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get List Users"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Chooses the field that the list will be sorted by",
			"default": "name",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get List Users"
					]
				}
			}
		},
		{
			"displayName": "Sort Type",
			"name": "sortType",
			"description": "Defines the sorting order. `ASC` is used for ascendant order. `DSC` is used for descendant order",
			"default": "ASC",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sortType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get List Users"
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
						"User"
					],
					"operation": [
						"Get List Users"
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
						"User"
					],
					"operation": [
						"Get List Users"
					]
				}
			}
		},
		{
			"displayName": "POST /api/license-manager/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "",
			"description": "Email of the user",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Name of the user",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
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
						"User"
					],
					"operation": [
						"Create User"
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
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "GET /api/license-manager/users/{userId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get User"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "The media type of the body of the request. Default value for license manager protocol is application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get User"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "userId",
			"required": true,
			"description": "ID from queried user.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get User"
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
						"User"
					],
					"operation": [
						"Get User"
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
						"User"
					],
					"operation": [
						"Get User"
					]
				}
			}
		},
];
