/**
 * Root route. If we start application non from root domain address
 * i.e non from http://mydomain.com but from http://mydomain.com/someroute
 * we should pick route "someroute" here.
 * For example using GitHub pages location dem is:
 * https://ip4422.github.io/public-repo-show
 * In this case ROOT_ROUTE will be "/public-repo-show"
 *
 */
export const ROOT_PATH = '/public-repo-show'
