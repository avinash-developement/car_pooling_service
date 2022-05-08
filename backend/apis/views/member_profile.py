def legacy_member_view(member):
    return {
        "uid": str(member.pk),
        "phone": member.phone,
        "first_name": member.first_name,
        "last_name": member.last_name,
        "email": member.email,
        "driving_license_number": member.driving_license_number,
        "driving_license_valid_from": member.driving_license_valid_from
    }
