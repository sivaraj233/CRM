from django.conf import settings
DELETED = 0

ACTIVE = 1

INACTIVE = 2

EXISTENCE_STATUS = (
    (DELETED, 'DELETED'),
    (ACTIVE, 'ACTIVE'),
    (INACTIVE, 'INACTIVE'),
)