
export const config = {
  database: {
    database: process.env.MYSQL_DATABASE || 'choices_analytics',
    host: process.env.MYSQL_HOST || 'localhost',
    password: process.env.MYSQL_PASSWORD || '',
    port: Number(process.env.MYSQL_PORT || '3306'),
    user: process.env.MYSQL_USER || 'root',
  },
  secrets: {
    cookie: process.env.COOKIE_KEY || '4uV1lNoKtMDDMXwppp'
  },
  sessionName: 'choices_analytics_session',
}
